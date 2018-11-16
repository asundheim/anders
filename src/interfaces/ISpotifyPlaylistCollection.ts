import { ISpotifyPlaylist } from './ISpotifyPlaylist';

export interface ISpotifyPlaylistCollection {
    href?: string;
    items?: ISpotifyPlaylist[];
    limit?: number;
    next?: any;
    offset?: number;
    previous?: any;
    total?: number;
}
