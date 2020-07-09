import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { globals } from 'src/environments/environment';
import { ChessService } from './chess.service';
import { IChessProfile } from 'src/interfaces/IChessProfile';
import { IChessPerformance } from 'src/interfaces/IChessPerformance';
import { IChessHistory } from 'src/interfaces/IChessHistory';
import { forkJoin } from 'rxjs';

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

        forkJoin(
          this.users.map(user => this.chessService.getUser(user))
        ).subscribe((profiles) => {
          this.scores = profiles;

          this.getScores().forEach((profile, i) => {
            this.chessService.getPuzzleHistory(profile.username).subscribe(u => {
              const canvas = document.getElementsByTagName("canvas")[i];
              const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

              const pscores = this.extractPuzzleScores(u);

              if (pscores.length > 0) {
                let min = Math.min(...pscores);
                let max = Math.max(...pscores);
                let height = canvas.height - 4;
                ctx.beginPath();
                ctx.moveTo(0, (height/(max-min))*(max-pscores[0]));
                for (let i = 1; i < pscores.length; i++) {
                  ctx.lineTo((canvas.width / pscores.length)*i, (height/(max-min))*(max-pscores[i]));
                  ctx.stroke();
                  ctx.arc((canvas.width / pscores.length)*i, (height/(max-min))*(max-pscores[i]), 2, 0, Math.PI*2)
                }
              }
            });
          });
        });
    }

    getScores() {
      return this.scores.sort((a,b)=>b.perfs.puzzle.rating - a.perfs.puzzle.rating);
    }

    extractPuzzleScores = (h: IChessHistory[]): number[] => h.filter(i => i.name === "Puzzles")[0].points.map(q => q[3]).slice(-10,-1);
    
}
