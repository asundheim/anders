import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ISpotifyPlaylistCollection } from '../../interfaces/ISpotifyPlaylistCollection';
import { ISpotifyPlaylist } from 'src/interfaces/ISpotifyPlaylist';
import { ISpotifyPlaylistTrackObject } from 'src/interfaces/ISpotifyPlaylistTrackObject';
import { ISpotifyTrackObject } from 'src/interfaces/ISpotifyTrackObject';
import { globals } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

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
      (data: ISpotifyPlaylistCollection) => {
        console.log(data);
        this.playlists = data.items;
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

  randomizeSongs() {
    for (let i = 0; i < this.songs.length; i++) {
      this.spotifyService.reorderPlaylist(
        this.auth,
        this.currentPlaylist.id,
        i,
        this.getRandomInt(0, this.songs.length + 1)
      ).subscribe(
        () => {},
        (error: HttpErrorResponse) => this.errorHandler(error)
      );
    }
    for (let i = this.songs.length - 1; i > -1; i--) {
      this.spotifyService.reorderPlaylist(
        this.auth,
        this.currentPlaylist.id,
        i,
        this.getRandomInt(0, this.songs.length + 1)
      ).subscribe(
        () => {},
        (error: HttpErrorResponse) => this.errorHandler(error)
      );
    }
    this.getSongs(this.currentPlaylist, 0, true);
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
    let unordered: ISpotifyTrackObject[] = this.songs.concat([]);
    const ordered = this.songs.concat([]);

    unordered = unordered.sort((a, b) => {
        if (a.added_at > b.added_at) {
          return 1;
        }

        if (a.added_at <= b.added_at) {
          return -1;
        }
    });

    for (let i = 0; i < unordered.length; i++) {
      if (i !== ordered.indexOf(unordered[i])) {
        this.spotifyService
          .reorderPlaylist(this.auth, this.currentPlaylist.id, ordered.indexOf(unordered[i]), i)
          .subscribe(
            () => {},
            (error: HttpErrorResponse) => this.errorHandler(error)
          );
      }
      const temp = ordered[i];
      ordered[i] = ordered[ordered.indexOf(unordered[i])];
      ordered[ordered.indexOf(unordered[i])] = temp;
    }

    this.getSongs(this.currentPlaylist, 0, true);
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
