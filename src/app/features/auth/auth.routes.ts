//Angular
import { Route } from '@angular/router';
//Constants
import { AUTH_PATHS, ROOT_PATHS } from '../../core/constants/paths.constants';
//Components
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

export const AUTH_ROUTES: Route[] = [
  { path: '', redirectTo: AUTH_PATHS.signin, pathMatch: 'full' },
  {
    path: AUTH_PATHS.signin,
    component: SigninComponent,
  },
  { path: AUTH_PATHS.signup, component: SignupComponent },
  { path: '**', redirectTo: ROOT_PATHS.error404 },
];
