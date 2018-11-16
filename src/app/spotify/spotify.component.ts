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
  songs: ISpotifyTrackObject[] = [];
  output: string;
  auth: string;

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
      this.playlists = data.items;
    });
  }

  getSongs(playlist: ISpotifyPlaylist) {
    this.spotifyService.getSong(this.auth, playlist.tracks.href).subscribe((song: ISpotifyPlaylistTrackObject) => {
      console.log(song);
      this.songs = song.items;
    });
  }

}
