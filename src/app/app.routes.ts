import {Routes} from '@angular/router';
import {EmailPageComponent} from './pages/email-page/email-page.component';
import {PassPageComponent} from './pages/pass-page/pass-page.component';
import {AuthGuard} from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: PassPageComponent
  },
  {
    path: 'email',
    canActivate: [AuthGuard],
    component: EmailPageComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
