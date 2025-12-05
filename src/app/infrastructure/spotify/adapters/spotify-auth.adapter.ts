import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SpotifyAuthAdapter {
  private ACCESS_TOKEN_KEY = 'spotify_access_token';
  private EXPIRY_TIME_KEY = 'spotify_expiry_time';
  private SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';

  redirectToAuth(): void {
    const params = new URLSearchParams({
      response_type: 'token',
      client_id: environment.spotifyClientId,
      scope: environment.spotifyScopes,
      redirect_uri: environment.spotifyRedirectUri,
      show_dialog: 'true'
    });
    window.location.href = `${this.SPOTIFY_AUTH_URL}?${params.toString()}`;
  }

  handleImplicitCallback(hash: string): boolean {
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('access_token');
    const expiresIn = params.get('expires_in');

    if (token && expiresIn) {
      const expiryTime = Date.now() + parseInt(expiresIn, 10) * 1000;
      localStorage.setItem(this.ACCESS_TOKEN_KEY, token);
      localStorage.setItem(this.EXPIRY_TIME_KEY, expiryTime.toString());
      return true;
    }
    return false;
  }

  async getAccessToken(): Promise<string> {
    const token = localStorage.getItem(this.ACCESS_TOKEN_KEY);
    const expiry = localStorage.getItem(this.EXPIRY_TIME_KEY);
    
    if (token && expiry && Date.now() < parseInt(expiry, 10)) {
      return token;
    }
    throw new Error('Token expirado o no encontrado');
  }
}