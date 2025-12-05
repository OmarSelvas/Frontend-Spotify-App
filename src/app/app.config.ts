import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import { SpotifyServicePort } from './core/domain/ports/spotify.port';
import { SpotifyApiAdapter } from './infrastructure/spotify/adapters/spotify-api.adapter';
import { ArtistaServicePort } from './core/domain/ports/artista.port';
import { HttpArtistaAdapter } from './infrastructure/api/adapters/http-artista.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    
    { provide: SpotifyServicePort, useClass: SpotifyApiAdapter },
    { provide: ArtistaServicePort, useClass: HttpArtistaAdapter }
  ]
}