import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pass-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pass-page.component.html',
  styleUrl: './pass-page.component.css'
})
export class PassPageComponent {
  passwordInput: string = '';
  emailPassword: string = 'email';
  blackPassword: string = 'blackscreen';
  alvaroPassword: string = 'alvaro';
  ibrahimPassword: string = 'ibrahim';

  constructor(private router: Router) {
  }

  checkPassword() {
    console.log("this.passwordInput", this.passwordInput)
    if (this.passwordInput === this.emailPassword) {
      this.router.navigate(['email']);
    } 
    else if (this.passwordInput === this.blackPassword) {
      this.router.navigate(['blackscreen']);
    } 
    else if (this.passwordInput === this.alvaroPassword) {
      this.router.navigate(['alvaro']);
    } 
    else if (this.passwordInput === this.alvaroPassword) {
      this.router.navigate(['alvaro']);
    } 
    else {
      alert('Incorrect password. Please try again.');
      this.passwordInput = '';
    }
  }
}
