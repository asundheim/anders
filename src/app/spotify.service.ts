import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISpotifyPlaylistCollection } from 'src/interfaces/ISpotifyPlaylistCollection';
import { globals } from '../environments/environment';
import { ISpotifyPlaylistTrackObject } from 'src/interfaces/ISpotifyPlaylistTrackObject';
import { map } from 'rxjs/operators';
import { ISpotifyPlaylist } from 'src/interfaces/ISpotifyPlaylist';
import { Observable } from 'rxjs';
import { ISpotifyReorderResponse } from 'src/interfaces/ISpotifyReorderResponse';
import { IAuthResponse } from 'src/interfaces/IServerAuth';
import { ISpotifyCurrentlyPlaying } from 'src/interfaces/ISpotifyCurrentlyPlaying';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  baseURL = 'https://api.spotify.com/v1';

  getPlaylists(auth: string): Observable<ISpotifyPlaylist[]> {
    return this.http.get<ISpotifyPlaylistCollection>(`${this.baseURL}/me/playlists`, {headers: this.constructHeaders(auth)})
      .pipe(map((x: ISpotifyPlaylistCollection) => x.items));
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
      '&scope=user-read-private%20playlist-modify-public%20playlist-modify-private%20playlist-read-collaborative%20playlist-read-private'
    );
  }

  getSong(auth: string, href: string, offset: number) {
    return this.http.get<ISpotifyPlaylistTrackObject>(`${href}?offset=${offset}`, {headers: this.constructHeaders(auth)});
  }

  reorderPlaylist(auth: string, id: string, snapshotId: string, startPos: number, insertPos: number) {
    return this.http.put<ISpotifyReorderResponse>(
        `${this.baseURL}/playlists/${id}/tracks`,
        `{"range_start" : ${startPos}, "insert_before" : ${insertPos} ${snapshotId ? `, "snapshot_id": "${snapshotId}"` : ``}}`,
        {headers: this.constructHeaders(auth)}
    );
  }

  constructHeaders(auth: string): HttpHeaders {
    return new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${auth}`
    });
  }

  getServerAuth() {
    return this.http.get<IAuthResponse>(`http://138.68.48.39/callback`);
  }

  getCurrentlyPlaying(auth: string) {
    return this.http.get<ISpotifyCurrentlyPlaying>(`${this.baseURL}/me/player/currently-playing`, {headers: this.constructHeaders(auth)});
  }

  getPlaylistData(auth: string, playlistId: string) {
    return this.http.get<ISpotifyPlaylist>(`${this.baseURL}/playlists/${playlistId}`, {headers: this.constructHeaders(auth)});
  }

}
