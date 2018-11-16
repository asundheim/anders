import { ISpotifyTrackObject } from './ISpotifyTrackObject';

export interface ISpotifyPlaylistTrackObject {
    href: string;
    total: number;
    items: ISpotifyTrackObject[];
}
