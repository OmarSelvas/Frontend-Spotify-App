import { Artista, CreateArtistaRequest, UpdateArtistaRequest } from '../models/artista.model';

export abstract class ArtistaServicePort {
  abstract getAllArtistas(): Promise<Artista[]>;
  abstract getArtistaById(id: string): Promise<Artista | null>;
  abstract createArtista(request: CreateArtistaRequest): Promise<Artista>;
  abstract updateArtista(id: string, request: UpdateArtistaRequest): Promise<Artista | null>;
  abstract deleteArtista(id: string): Promise<boolean>;
}