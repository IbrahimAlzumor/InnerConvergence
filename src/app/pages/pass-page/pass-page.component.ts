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
  correctPassword: string = 's';

  constructor(private router: Router) {
  }

  checkPassword() {
    console.log("this.passwordInput", this.passwordInput)
    if (this.passwordInput === this.correctPassword) {
      if (localStorage.getItem("authenticated") === "true") {
        alert('A tab is already open')
        this.passwordInput = '';
        return
      }

      localStorage.setItem("authenticated", "true")
      sessionStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['email']);
      // setTimeout(() => {
      // localStorage.removeItem('isAuthenticated');
      // this.router.navigate(['/']);
      // }, 2000);
    } else {
      alert('Incorrect password. Please try again.');
      this.passwordInput = '';
    }
  }
}
