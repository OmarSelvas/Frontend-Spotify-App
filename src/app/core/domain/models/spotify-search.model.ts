export interface SpotifyTrack {
  id: string;
  name: string;
  artist: string;
  album: string;
  uri: string;
  imageUrl: string | null;
  durationMs: number;
}