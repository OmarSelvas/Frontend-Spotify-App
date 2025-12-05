export interface Artista {
  id: string;
  name: string;
  genre: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateArtistaRequest {
  name: string;
  genre: string | null;
}

export interface UpdateArtistaRequest {
  name?: string | null;
  genre?: string | null;
}