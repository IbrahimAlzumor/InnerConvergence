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
  private rawHtml =   "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +
  "END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " +"END END END END " 
public New: SafeHtml;


constructor(private sanitizer: DomSanitizer) {
  this.New = this.sanitizer.bypassSecurityTrustHtml(this.rawHtml);
}
}
