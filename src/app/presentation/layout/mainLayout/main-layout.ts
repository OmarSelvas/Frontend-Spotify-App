import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar';
import { PlayerComponent } from '../player/player';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, PlayerComponent],
  template: `
    <div class="app-container">
      <aside class="sidebar-area">
        <app-sidebar></app-sidebar>
      </aside>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <footer class="player-area">
        <app-player>s</app-player>
      </footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: grid;
      grid-template-columns: 240px 1fr;
      grid-template-rows: 1fr 90px;
      height: 100vh;
      width: 100vw;
    }
    .sidebar-area { grid-row: 1 / 2; grid-column: 1 / 2; }
    .main-content {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      background: linear-gradient(180deg, #222 0%, #121212 40%);
      overflow-y: auto;
      padding: 20px;
    }
    .player-area { grid-row: 2 / 3; grid-column: 1 / 3; z-index: 10; }
  `]
})
export class MainLayoutComponent {}