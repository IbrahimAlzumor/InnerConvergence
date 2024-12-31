import {Routes} from '@angular/router';
import {EmailPageComponent} from './pages/email-page/email-page.component';
import {PassPageComponent} from './pages/pass-page/pass-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { AlvaroComponent } from './pages/alvaro/alvaro.component';
import { DarkTextComponent } from './pages/dark-text/dark-text.component';
import { MainComponent } from './pages/main/main.component';
import { IbrahimComponent } from './pages/ibrahim/ibrahim.component';
import { EndComponent } from './pages/end/end.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'News',
    component: NewsPageComponent,
  },
  {
    path: 'Login',
    component: PassPageComponent,
  },
  {
    path: 'Email',
    component: EmailPageComponent,
  },
  {
    path: 'Ibrahim',
    component: DarkTextComponent,
  },
  {
    path: 'End',
    component: EndComponent,
  },
  {
    path: 'Alvaro',
    component: AlvaroComponent,
  },
  {
    path: 'BlackScreen',
    component: IbrahimComponent,
  }
];
