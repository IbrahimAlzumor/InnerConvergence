import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { PassPageComponent } from './pages/pass-page/pass-page.component';
import { EmailPageComponent } from './pages/email-page/email-page.component';
import { DarkTextComponent } from './pages/dark-text/dark-text.component';
import { EndComponent } from './pages/end/end.component';
import { AlvaroComponent } from './pages/alvaro/alvaro.component';
import { IbrahimComponent } from './pages/ibrahim/ibrahim.component';

const routes: Routes = [
  {path: '', component: MainComponent, pathMatch: 'full'},
  {path: 'News', component: NewsPageComponent},
  {path: 'Login', component: PassPageComponent},
  {path: 'Email', component: EmailPageComponent},
  {path: 'Ibrahim', component: DarkTextComponent},
  {path: 'End', component: EndComponent},
  {path: 'Alvaro', component: AlvaroComponent},
  {path: 'BlackScreen', component: IbrahimComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
