import { ISpotifyPlaylistTrackObject } from './ISpotifyPlaylistTrackObject';

export interface ISpotifyPlaylist {
    collaborative?: boolean;
    externalUrls?: any;
    href?: string;
    id?: string;
    images?: any;
    name?: string;
    owner?: any;
    public?: boolean;
    snapshotid?: string;
    tracks?: ISpotifyPlaylistTrackObject;
    type?: string;
    uri?: string;
}
