import { Routes } from '@angular/router';
import { Dashboard } from './presentation/pages/dashboard/dashboard';
import { Callback } from './presentation/pages/callback/callback';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'callback', component: Callback },
  { path: '**', redirectTo: '' }
];