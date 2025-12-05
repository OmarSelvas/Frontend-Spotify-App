import { Routes } from '@angular/router';
import { MainLayoutComponent } from './presentation/layout/mainLayout/main-layout';
import { Dashboard } from './presentation/pages/dashboard/dashboard';
import { Callback } from './presentation/pages/callback/callback';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // El Layout envuelve al Dashboard
    children: [
      { path: '', component: Dashboard }
    ]
  },
  { path: 'callback', component: Callback }, // El Callback va sin layout (pantalla completa)
  { path: '**', redirectTo: '' }
];