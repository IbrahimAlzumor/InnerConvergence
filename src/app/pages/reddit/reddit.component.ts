import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-reddit',
  standalone: true,
  imports: [],
  templateUrl: './reddit.component.html',
  styleUrl: './reddit.component.css'
})
export class redditComponent {



constructor(private sanitizer: DomSanitizer) {
}
}
