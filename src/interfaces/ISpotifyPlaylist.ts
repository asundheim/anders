import { ISpotifyPlaylistTrackObject } from './ISpotifyPlaylistTrackObject';
import { ISpotifyImage } from './ISpotifyImage';

export interface ISpotifyPlaylist {
    collaborative?: boolean;
    external_urls?: any;
    href?: string;
    id?: string;
    images?: ISpotifyImage[];
    name?: string;
    owner?: any;
    public?: boolean;
    snapshotid?: string;
    tracks?: ISpotifyPlaylistTrackObject;
    type?: string;
    uri?: string;
}
