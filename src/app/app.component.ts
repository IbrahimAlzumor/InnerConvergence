import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkTextComponent } from "./pages/dark-text/dark-text.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ DarkTextComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
