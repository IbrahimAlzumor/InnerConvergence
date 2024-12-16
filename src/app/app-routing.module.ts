import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PassPageComponent} from './pages/pass-page/pass-page.component';
import {EmailPageComponent} from './pages/email-page/email-page.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', component: PassPageComponent},
  {path: 'email', component: EmailPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
