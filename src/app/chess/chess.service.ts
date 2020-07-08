import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ISpotifyPlaylistCollection,
  ISpotifyPlaylistTrackObject,
  ISpotifyPlaylist,
  ISpotifyReorderResponse,
  IAuthResponse,
  ISpotifyCurrentlyPlaying,
  IServerStatus
} from 'src/interfaces/index';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IChessProfile } from 'src/interfaces/IChessProfile';

@Injectable({
  providedIn: 'root'
})
export class ChessService {

  constructor(private http: HttpClient) { }

  baseURL = 'https://lichess.org';

  getUser(user: string): Observable<IChessProfile> {
    return this.http.get<IChessProfile>(`${this.baseURL}/api/user/${user}`);
  }

}
