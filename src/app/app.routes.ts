import { Route } from '@angular/router';
import { Error404Component } from './core/components/error-404/error-404.component';
import { AUTH_PATHS, ROOT_PATHS } from './core/constants/paths.constants';
import { HomeComponent } from './features/home/home/home.component';

export const coreRoutes: Route[] = [
  {
    path: ROOT_PATHS.home,
    component: HomeComponent,
  },
  {
    path: AUTH_PATHS.base,
    loadChildren: async () =>
      import('./features/auth/auth.routes').then(
        (module_) => module_.AUTH_ROUTES
      ),
  },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
];
