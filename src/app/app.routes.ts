import { Routes } from '@angular/router';
import { EmailPageComponent } from './pages/email-page/email-page.component';
import { PassPageComponent } from './pages/pass-page/pass-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AlvaroComponent } from './pages/alvaro/alvaro.component';
import { DarkTextComponent } from './pages/dark-text/dark-text.component';
import { MainComponent } from './pages/main/main.component';
import { IbrahimComponent } from './pages/ibrahim/ibrahim.component';
import { EndComponent } from './pages/end/end.component';
import { AuthGuard } from './auth.guard';
import { AwadComponent } from './pages/awad/awad.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'main', component: MainComponent },
  { path: 'news', component: NewsPageComponent }, 
  { path: 'login', component: PassPageComponent },
  { path: 'email', component: EmailPageComponent, canActivate: [AuthGuard] },
  { path: 'ibrahim', component: DarkTextComponent, canActivate: [AuthGuard] },
  { path: 'end', component: EndComponent, canActivate: [AuthGuard] },
  { path: 'alvaro', component: AlvaroComponent, canActivate: [AuthGuard] },
  { path: 'blackscreen', component: IbrahimComponent, canActivate: [AuthGuard] },
  { path: 'innocent', component: AwadComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];
