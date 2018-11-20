import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISpotifyPlaylistCollection } from 'src/interfaces/ISpotifyPlaylistCollection';
import { globals } from '../environments/environment';
import { ISpotifyPlaylistTrackObject } from 'src/interfaces/ISpotifyPlaylistTrackObject';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  baseURL = 'https://api.spotify.com/v1';

  authOptions = {
    headers: new HttpHeaders({
      'client_id': 'b3df13bb570843e78f1c9eadf6880e8b',
      'response_type': 'token',
      'redirect_uri': globals.spotifyRedirect,
      'scope': 'user-read-private'
    })
  };

  getPlaylists(auth: string) {
    return this.http.get<ISpotifyPlaylistCollection>(`${this.baseURL}/me/playlists`, {headers: this.constructHeaders(auth)});
  }

  getUser(auth: string) {
    return this.http.get(`${this.baseURL}/me`, {headers: this.constructHeaders(auth)});
  }

  getAuth() {
    location.href = (
      'https://accounts.spotify.com/authorize' +
      '?client_id=b3df13bb570843e78f1c9eadf6880e8b' +
      '&response_type=token' +
      '&redirect_uri=' + globals.spotifyRedirect +
      '&scope=user-read-private%20playlist-modify-public%20playlist-modify-private'
    );
  }

  getSong(auth: string, href: string, offset: number) {
    return this.http.get<ISpotifyPlaylistTrackObject>(`${href}?offset=${offset}`, {headers: this.constructHeaders(auth)});
  }

  reorderPlaylist(auth: string, id: string, startPos: number, insertPos: number) {
    return this.http.put(
        `${this.baseURL}/playlists/${id}/tracks`,
        `{"range_start" : ${startPos}, "insert_before" : ${insertPos}}`,
        {headers: this.constructHeaders(auth)}
    );
  }

  constructHeaders(auth: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${auth}`
    });
  }

}
