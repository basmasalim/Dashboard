import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard, title: 'Dashboard' },
  {
    path: 'userDetails/:id',
    loadComponent: () => import('./pages/details/details').then((c) => c.Details),
    title: 'User Details',
  },
];
