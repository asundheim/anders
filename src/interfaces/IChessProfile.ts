import { IChessPerformance } from './IChessPerformance';

export interface IChessProfile {
    perfs: {
        blitz: IChessPerformance,
        bullet: IChessPerformance,
        puzzle: IChessPerformance
    },
    username: string
}
