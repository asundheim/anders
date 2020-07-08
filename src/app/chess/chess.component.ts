import { Component, OnInit } from '@angular/core';
import { globals } from 'src/environments/environment';
import { ChessService } from './chess.service';
import { IChessProfile } from 'src/interfaces/IChessProfile';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {
    users = ['everytang', 'asundheim', 'zek1729', 'Garrettski', 'cfarrell77'];

    scores: IChessProfile[] = [];

    constructor(private chessService: ChessService) { }

    ngOnInit() {
        globals.header = 'Puzzle Leaderboard';

        this.users.forEach((user) => {
          this.chessService.getUser(user).subscribe(u => this.scores.push(u));
        });

    }

    getScores() {
      return this.scores.sort((a,b)=>b.perfs.puzzle.rating - a.perfs.puzzle.rating)
    }
}
