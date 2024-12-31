import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-ibrahim',
  standalone: true,
  imports: [],
  templateUrl: './ibrahim.component.html',
  styleUrl: './ibrahim.component.css'
})
export class IbrahimComponent {
  constructor(private sanitizer: DomSanitizer) {
  }
}
