export interface Album {
  id: string;
  title: string;
  releaseYear: number;
  artistId: string;
  artistName: string | null;
}