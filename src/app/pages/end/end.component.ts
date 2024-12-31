import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-end',
  standalone: true,
  imports: [],
  templateUrl: './end.component.html',
  styleUrl: './end.component.css'
})
export class EndComponent {
  

  constructor(private sanitizer: DomSanitizer) {
  }
}
