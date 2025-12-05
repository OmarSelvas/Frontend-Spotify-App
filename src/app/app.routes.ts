import { Routes } from '@angular/router';
import { MainLayoutComponent } from './presentation/layout/mainLayout/main-layout';
import { Dashboard } from './presentation/pages/dashboard/dashboard';
import { Callback } from './presentation/pages/callback/callback';
import { ArtistDetail } from './presentation/pages/artist-detail/artist-detail';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, 
    children: [
      { path: '', component: Dashboard },
      { path: 'artist/:id', component: ArtistDetail }
    ]
  },
  { path: 'callback', component: Callback }, // Callback va fuera del layout (sin sidebar/player)
  { path: '**', redirectTo: '' }
];