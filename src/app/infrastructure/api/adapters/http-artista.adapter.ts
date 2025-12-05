import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Artista, CreateArtistaRequest, UpdateArtistaRequest } from '../../../core/domain/models/artista.model';
import { ArtistaServicePort } from '../../../core/domain/ports/artista.port';
import { ApiResponse } from '../dtos/api-response.dto';

@Injectable()
export class HttpArtistaAdapter implements ArtistaServicePort {

  // Puerto Ktor configurado en tu application.yaml (port: 3000)
  private readonly API_URL = 'http://localhost:3000/api/artistas'; 

  constructor(private http: HttpClient) {}

  async getAllArtistas(): Promise<Artista[]> {
    // GET /api/artistas (usa el wrapper ApiResponse de Ktor)
    const response = await firstValueFrom(
      this.http.get<ApiResponse<Artista[]>>(this.API_URL)
    );
    return response.data;
  }

  async getArtistaById(id: string): Promise<Artista | null> {
    // GET /api/artistas/{id}
    try {
      const response = await firstValueFrom(
        this.http.get<ApiResponse<Artista>>(`${this.API_URL}/${id}`)
      );
      return response.data;
    } catch (e) {
      return null; 
    }
  }

  async createArtista(request: CreateArtistaRequest): Promise<Artista> {
    // POST /api/artistas (retorna directamente la entidad Artista sin wrapper)
    return await firstValueFrom(
      this.http.post<Artista>(this.API_URL, request)
    );
  }
  
  // Implementaciones PUT y DELETE, basadas en los endpoints que analizamos
  async updateArtista(id: string, request: UpdateArtistaRequest): Promise<Artista | null> {
    // PUT /api/artistas/{id}
    const response = await firstValueFrom(
      this.http.put<ApiResponse<Artista>>(`${this.API_URL}/${id}`, request)
    );
    return response.data;
  }
  
  async deleteArtista(id: string): Promise<boolean> {
      // DELETE /api/artistas/{id}
      try {
        const response = await firstValueFrom(
          this.http.delete<ApiResponse<null>>(`${this.API_URL}/${id}`)
        );
        return response.success;
      } catch (e) {
        // Manejo de error si Ktor devuelve 409 (conflicto) o 404
        return false;
      }
  }
}