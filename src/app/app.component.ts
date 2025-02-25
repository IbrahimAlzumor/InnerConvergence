import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DisableRightClickDirective } from './disable-right-click.directive';
import { redditComponent } from "./pages/reddit/reddit.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, DisableRightClickDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}