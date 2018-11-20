import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { ISpotifyPlaylistCollection } from '../../interfaces/ISpotifyPlaylistCollection';
import { ISpotifyPlaylist } from 'src/interfaces/ISpotifyPlaylist';
import { Router } from '@angular/router';
import { ISpotifyPlaylistTrackObject } from 'src/interfaces/ISpotifyPlaylistTrackObject';
import { ISpotifyTrackObject } from 'src/interfaces/ISpotifyTrackObject';

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

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    if (window.location.hash) {
      this.auth = window.location.hash.split('&')[0].split('=')[1];
    } else {
      this.spotifyService.getAuth();
    }
  }

  getPlaylists() {
    this.spotifyService.getPlaylists(this.auth).subscribe((data: ISpotifyPlaylistCollection) => {
      console.log(data);
      this.playlists = data.items;
    });
  }

  getSongs(playlist: ISpotifyPlaylist, offset: number, refresh: boolean) {
    this.showSongs = true;
    this.currentPlaylist = playlist;
    if (refresh) {
      this.songs = [];
    }
    this.spotifyService.getSong(this.auth, playlist.tracks.href, offset).subscribe((song: ISpotifyPlaylistTrackObject) => {
      console.log(song);
      this.songs = this.songs.concat(song.items);
      if (100 + offset < song.total) {
        this.getSongs(playlist, offset + 100, false);
      }
    });
  }

  randomizeSongs() {
    for (let i = 0; i < this.songs.length; i++) {
      this.spotifyService.reorderPlaylist(
        this.auth,
        this.currentPlaylist.id,
        i,
        this.getRandomInt(0, this.songs.length + 1)
      ).subscribe();
    }
    for (let i = this.songs.length - 1; i > -1; i--) {
      this.spotifyService.reorderPlaylist(
        this.auth,
        this.currentPlaylist.id,
        i,
        this.getRandomInt(0, this.songs.length + 1)
      ).subscribe();
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

}
