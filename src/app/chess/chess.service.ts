import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IChessProfile } from 'src/interfaces/IChessProfile';
import { IChessHistory } from 'src/interfaces/IChessHistory';

@Injectable({
  providedIn: 'root'
})
export class ChessService {

  constructor(private http: HttpClient) { }

  baseURL = 'https://lichess.org';

  getUser(user: string): Observable<IChessProfile> {
    return this.http.get<IChessProfile>(`${this.baseURL}/api/user/${user}`);
  }

  getPuzzleHistory(user: string): Observable<IChessHistory[]> {
    return this.http.get<IChessHistory[]>(`${this.baseURL}/api/user/${user}/rating-history`);
  }

}
