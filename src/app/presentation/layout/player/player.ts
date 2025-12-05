import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  template: `
    <div class="player">
      <div class="track-info">
        <div class="placeholder-art"></div>
        <div class="details">
          <span class="track-name">Canción...</span>
          <span class="artist-name">Artista...</span>
        </div>
      </div>
      <div class="controls">
        <button>⏮️</button>
        <button class="play-btn">▶️</button>
        <button>⏭️</button>
      </div>
      <div class="volume">🔊 ──⚪─────</div>
    </div>
  `,
  styles: [`
    .player {
      background-color: #181818;
      border-top: 1px solid #282828;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      box-sizing: border-box;
    }
    .track-info { display: flex; align-items: center; width: 30%; }
    .placeholder-art { width: 56px; height: 56px; background: #333; margin-right: 15px; }
    .details { display: flex; flex-direction: column; }
    .track-name { color: white; font-size: 0.9rem; }
    .artist-name { color: #b3b3b3; font-size: 0.75rem; }
    .controls { display: flex; align-items: center; gap: 20px; }
    button { background: none; border: none; font-size: 1.2rem; cursor: pointer; }
    .play-btn { font-size: 2rem; }
    .volume { width: 30%; text-align: right; color: #b3b3b3; }
  `]
})
export class PlayerComponent {}