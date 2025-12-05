import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArtistaServicePort } from '../../core/domain/ports/artista.port';
import { SpotifyServicePort } from '../../core/domain/ports/spotify.port';
import { HttpArtistaAdapter } from '../api/adapters/http-artista.adapter';
import { SpotifyApiAdapter } from '../spotify/adapters/spotify-api.adapter';
import { SpotifyAuthAdapter } from '../spotify/adapters/spotify-auth.adapter';

@NgModule({
  imports: [CommonModule, HttpClientModule]
})
export class InfrastructureModule {
  static forRoot(): ModuleWithProviders<InfrastructureModule> {
    return {
      ngModule: InfrastructureModule,
      providers: [
        // 1. ADAPTADOR DE TU BACKEND KTOR (Implementa ArtistaServicePort)
        { provide: ArtistaServicePort, useClass: HttpArtistaAdapter },
        
        // 2. ADAPTADORES DE SPOTIFY (Implementan SpotifyServicePort)
        SpotifyAuthAdapter, // Proveedor de soporte (manejo de tokens)
        { provide: SpotifyServicePort, useClass: SpotifyApiAdapter } // Adaptador de la API
      ]
    };
  }
}