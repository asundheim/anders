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
const fs = require('fs');
const readline = require('readline');
let dryStreak = 0;
let cdf = 0;
let dryPoints = [];
let dryStreaks = [];

function factorial(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function chance(num) {
    return (num/570000)*.8
}

function totalPoints() {
    return dryPoints.reduce((a,b) => a+b, 0);
}

const rl = readline.createInterface({
    input: fs.createReadStream('raid_tracker_data.log'),
    crlfDelay: Infinity
});
console.log('Chambers of Xeric dry streaks for thecrinkler')

rl.on('line', (line) => {
    const data = JSON.parse(line);
    dryStreak++;
    dryPoints.push(data.totalPoints);
    if (data.specialLoot) {
        total = 0;
        for (let i = 0; i < 1; i++) {
            total += 1 - (factorial(dryPoints.length)/(factorial(i)*(factorial(dryPoints.length - i))))*Math.pow((chance(dryPoints[i])), i)*Math.pow(1-(chance(dryPoints[i])),dryPoints.length - i);
        }

        dryStreaks.push({streak: dryStreak, loot: data.specialLoot, receiver: data.specialLootReceiver});
        console.log(`Dry Streak: ${dryStreak} - broken by ${data.specialLoot} from ${data.specialLootReceiver} - probability of purple ${total * 100}% (${totalPoints()} points)`);
        dryStreak = 0;
        dryPoints = [];
    }
}).on('close', () => {
    total = 0;
    for (let i = 0; i < 1; i++) {
        total += 1 - (factorial(dryPoints.length)/(factorial(i)*(factorial(dryPoints.length - i))))*Math.pow((chance(dryPoints[i])), i)*Math.pow(1-(chance(dryPoints[i])),dryPoints.length - i);
    }
    console.log(`Current Dry Streak: ${dryStreak} - probability of purple ${total * 100}% (${totalPoints()} points)`);
});



}
