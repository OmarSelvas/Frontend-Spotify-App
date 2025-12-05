import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyAuthAdapter } from '../../../infrastructure/spotify/adapters/spotify-auth.adapter';

@Component({
  selector: 'app-callback',
  template: `<p>Procesando login de Spotify...</p>`,
  standalone: true
})
export class Callback implements OnInit {
  constructor(private auth: SpotifyAuthAdapter, private router: Router) {}
  ngOnInit() {
    const hash = window.location.hash;
    if (hash) {
      const success = this.auth.handleImplicitCallback(hash);
      if (success) {
        this.router.navigate(['/']);
      } else {
        console.error('Fallo en autenticación');
      }
    }
  }
}