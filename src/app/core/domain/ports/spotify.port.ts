import { SpotifyTrack } from '../models/spotify-search.model';

export abstract class SpotifyServicePort {
  abstract searchTracks(query: string, limit?: number): Promise<SpotifyTrack[]>;
  abstract playTrack(uri: string): Promise<void>;
  abstract getAccessToken(): Promise<string>;
  abstract checkAuthStatus(): Promise<boolean>;
  abstract redirectToAuth(): void;
}