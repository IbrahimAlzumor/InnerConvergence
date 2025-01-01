import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../../auth.service';


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

  constructor(private router: Router, private authService: AuthService){
  }

  ngOnInit(): void {
    this.authService.clearAuthenticatedRoutes();
  }

  checkPassword() {
    console.log('this.passwordInput', this.passwordInput);

    if (this.passwordInput === this.emailPassword) {
      this.authService.authenticateRoute('email'); 
      this.router.navigate(['email']);
    } else if (this.passwordInput === this.blackPassword) {
      this.authService.authenticateRoute('blackscreen'); 
      this.router.navigate(['blackscreen']);
    } else if (this.passwordInput === this.alvaroPassword) {
      this.authService.authenticateRoute('alvaro'); 
      this.router.navigate(['alvaro']);
    } else if (this.passwordInput === this.ibrahimPassword) {
      this.authService.authenticateRoute('ibrahim');
      this.router.navigate(['ibrahim']);
    } else {
      alert('Incorrect password. Please try again.');
      this.passwordInput = '';
    }
  }
}
