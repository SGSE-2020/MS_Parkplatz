import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LandingComponent} from './components/landing/landing.component';
import {LoginComponent} from './components/login/login.component';

import {PlaygroundComponent} from './components/playground/playground.component';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToLanding = () => redirectLoggedInTo(['landing']);

const routes: Routes = [
  {
    path: '', component: HomeComponent, canActivate: [AngularFireAuthGuard], data: {authGuardPipe: redirectUnauthorizedToLogin}, children: [
      {path: '', redirectTo: 'landing', pathMatch: 'full'},
      {path: 'landing', component: LandingComponent},
    ]
  },
  {path: 'login', component: LoginComponent, data: {authGuardPipe: redirectLoggedInToLanding}},
  {path: 'playground', component: PlaygroundComponent},

  // If there is not match, redirect to home
  {path: '**', redirectTo: ''}
];

const routerOptions: ExtraOptions = {
  useHash: false,
};

export const AppRoutingModule = RouterModule.forRoot(routes, routerOptions);
