import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-dark-text',
  standalone: true,
  imports: [],
  templateUrl: './dark-text.component.html',
  styleUrl: './dark-text.component.css'
})
export class DarkTextComponent {
  

  constructor(private sanitizer: DomSanitizer) {
  }
}
