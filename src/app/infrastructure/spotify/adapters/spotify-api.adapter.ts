import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SpotifyServicePort } from '../../../core/domain/ports/spotify.port';
import { SpotifyTrack } from '../../../core/domain/models/spotify-search.model';
import { SpotifyAuthAdapter } from './spotify-auth.adapter';

@Injectable({ providedIn: 'root' })
export class SpotifyApiAdapter implements SpotifyServicePort {
  private readonly API_URL = 'https://api.spotify.com/v1';

    constructor(private http: HttpClient, private auth: SpotifyAuthAdapter) {}
  async checkAuthStatus(): Promise<boolean> {
    try {
      await this.auth.getAccessToken();
      return true;
    } catch {
      return false;
    }
  }

  redirectToAuth(): void {
    this.auth.redirectToAuth();
  }

  async getAccessToken(): Promise<string> {
    return this.auth.getAccessToken();
  }

  async searchTracks(query: string, limit: number = 10): Promise<SpotifyTrack[]> {
    const token = await this.getAccessToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    const response = await firstValueFrom(
      this.http.get<any>(`${this.API_URL}/search`, {
        headers,
        params: { q: query, type: 'track', limit: limit.toString() }
      })
    );

    return response.tracks.items.map((item: any) => ({
      id: item.id,
      name: item.name,
      artist: item.artists[0].name,
      album: item.album.name,
      uri: item.uri,
      imageUrl: item.album.images[0]?.url,
      durationMs: item.duration_ms
    }));
  }

  async playTrack(uri: string): Promise<void> {
    const token = await this.getAccessToken();
    await firstValueFrom(
      this.http.put(`${this.API_URL}/me/player/play`, { uris: [uri] }, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      })
    );
  }
}