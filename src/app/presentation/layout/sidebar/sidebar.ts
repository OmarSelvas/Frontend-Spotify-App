import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="sidebar">
      <div class="logo">MusicApp 🎵</div>
      <ul>
        <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">🏠 Inicio</a></li>
        <li><a routerLink="/search" routerLinkActive="active">🔍 Buscar</a></li>
        <li><a routerLink="/collection" routerLinkActive="active">📚 Tu Biblioteca</a></li>
      </ul>
      <div class="divider"></div>
      <div class="playlists">
        <button class="create-playlist">➕ Crear Playlist</button>
      </div>
    </nav>
  `,
  styles: [`
    .sidebar {
      background-color: #000000;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 24px;
      box-sizing: border-box;
    }
    .logo { font-size: 1.5rem; font-weight: bold; margin-bottom: 30px; color: white; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { margin-bottom: 10px; }
    a {
      text-decoration: none;
      color: #b3b3b3;
      font-weight: 700;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      padding: 10px 0;
      transition: color 0.3s;
    }
    a:hover, a.active { color: white; }
    .divider { height: 1px; background: #282828; margin: 20px 0; }
    .create-playlist {
      background: transparent; border: none; color: #b3b3b3;
      cursor: pointer; font-weight: 700; font-size: 0.9rem;
    }
    .create-playlist:hover { color: white; }
  `]
})
export class SidebarComponent {}