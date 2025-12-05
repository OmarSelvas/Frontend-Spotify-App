import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyServicePort } from '../../../core/domain/ports/spotify.port';
import { ArtistaServicePort } from '../../../core/domain/ports/artista.port';
import { SpotifyTrack } from '../../../core/domain/models/spotify-search.model';
import { Artista } from '../../../core/domain/models/artista.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  tracks: SpotifyTrack[] = [];
  artistasLocales: Artista[] = [];
  isAuthenticated = false;

  constructor(
    private spotify: SpotifyServicePort,
    private localApi: ArtistaServicePort
  ) {}

  async ngOnInit() {
    this.isAuthenticated = await this.spotify.checkAuthStatus();
    
    if (this.isAuthenticated) {
      this.tracks = await this.spotify.searchTracks('Top Global', 5);
    }
    
    // Cargar datos de tu backend
    try {
      this.artistasLocales = await this.localApi.getAllArtistas();
    } catch (e) {
      console.error('Backend local no disponible', e);
    }
  }

  login() {
    this.spotify.redirectToAuth();
  }

  play(uri: string) {
    this.spotify.playTrack(uri).catch(err => alert('Error al reproducir. Necesitas Spotify Premium y un dispositivo activo.'));
  }
}