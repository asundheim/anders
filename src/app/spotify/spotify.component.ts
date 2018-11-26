import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ISpotifyPlaylist } from 'src/interfaces/ISpotifyPlaylist';
import { ISpotifyPlaylistTrackObject } from 'src/interfaces/ISpotifyPlaylistTrackObject';
import { ISpotifyTrackObject } from 'src/interfaces/ISpotifyTrackObject';
import { globals } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ISpotifyReorderResponse } from 'src/interfaces/ISpotifyReorderResponse';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.scss']
})
export class SpotifyComponent implements OnInit {
  playlists: ISpotifyPlaylist[];
  currentPlaylist: ISpotifyPlaylist;
  songs: ISpotifyTrackObject[] = [];
  output: string;
  auth: string;
  showSongs = false;
  loading = false;
  loadingProgress = 0;

  constructor(private spotifyService: SpotifyService, private messageService: MessageService) { }

  ngOnInit() {
    globals.header = 'Spotify Randomizer';
    if (window.location.hash) {
      this.auth = window.location.hash.split('&')[0].split('=')[1];
    } else {
      this.spotifyService.getAuth();
    }
  }

  getPlaylists() {
    this.spotifyService.getPlaylists(this.auth).subscribe(
      (data: ISpotifyPlaylist[]) => {
        console.log(data);
        this.playlists = data;
      },
      (error: HttpErrorResponse) => this.errorHandler(error)
    );
  }

  getSongs(playlist: ISpotifyPlaylist, offset: number, refresh: boolean) {
    this.showSongs = true;
    this.currentPlaylist = playlist;
    if (refresh) {
      this.songs = [];
    }
    this.spotifyService.getSong(this.auth, playlist.tracks.href, offset).subscribe(
      (song: ISpotifyPlaylistTrackObject) => {
        this.songs = this.songs.concat(song.items);
        if (100 + offset < song.total) {
          this.getSongs(playlist, offset + 100, false);
        }
      },
      (error: HttpErrorResponse) => this.errorHandler(error)
    );
  }

  randomizeSongs(index: number, snapshotId: string) {
    this.loading = true;
    if (index === this.songs.length) {
      this.loading = false;
      this.loadingProgress = 0;
      this.getSongs(this.currentPlaylist, 0, true);
    } else {
      this.spotifyService.reorderPlaylist(
        this.auth,
        this.currentPlaylist.id,
        snapshotId,
        index,
        this.getRandomInt(0, this.songs.length + 1)
      ).subscribe(
        (response) => {
          this.loadingProgress += 100 / this.songs.length;
          this.randomizeSongs(index + 1, response.snapshot_id);
        },
        (error: HttpErrorResponse) => this.errorHandler(error)
      );
    }
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  showPlaylists() {
    this.showSongs = false;
  }

  resetOrder() {
    this.loading = true;

    let unordered: ISpotifyTrackObject[] = this.songs.concat([]);
    const ordered: ISpotifyTrackObject[] = this.songs.concat([]);

    // Sort
    unordered = unordered.sort((a, b) => {
        if (a.added_at > b.added_at) {
          return 1;
        }

        if (a.added_at <= b.added_at) {
          return -1;
        }
    });
    this.recReset(0, unordered, ordered, null);
  }

  recReset(index: number, unordered: ISpotifyTrackObject[], ordered: ISpotifyTrackObject[], snapshotId: string) {
    if (index === this.songs.length) {
      this.loading = false;
      this.loadingProgress = 0;
      this.getSongs(this.currentPlaylist, 0, true);
    } else {
      const current = ordered.indexOf(unordered[index]);
      this.spotifyService
        .reorderPlaylist(this.auth, this.currentPlaylist.id, snapshotId, current, index)
        .subscribe(
          (response: ISpotifyReorderResponse) => {
            if (current < index) { // shift up
              for (let i = current; i < index; i++) {
                ordered[i] = ordered[i + 1];
              }
            } else if (current > index) { // shift down
              for (let i = current; i > index; i--) {
                ordered[i] = ordered[i - 1];
              }
            }
            ordered[index] = unordered[index];
            this.loadingProgress += (100 / this.songs.length);
            this.recReset(index + 1, unordered, ordered, response.snapshot_id);
          },
          (error: HttpErrorResponse) => this.errorHandler(error)
        );
    }
  }

  errorHandler(err: HttpErrorResponse) {
    switch (err.error.error.status) {
      case 401:
        this.spotifyService.getAuth();
        break;
      case 400:
        alert('Something bad happened. Uh oh.');
        break;
      case 502:
        this.messageService.add(
          {
            severity: 'error',
            summary: '502',
            detail: 'Something weird happpened. It\'s not our fault.'
          }
        );
    }
  }

}
