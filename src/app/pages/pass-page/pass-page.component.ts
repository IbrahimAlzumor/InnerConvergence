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
  endPassword: string = 'end';
  innocentPassword: string = 'innocent';
  redditPassword: string = 'reddit';
  flashBackground: boolean = false;

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
    }else if (this.passwordInput === this.endPassword) {
      this.authService.authenticateRoute('end');
      this.router.navigate(['end']);
    }else if (this.passwordInput === this.innocentPassword) {
      this.authService.authenticateRoute('innocent');
      this.router.navigate(['innocent']);
    }else if (this.passwordInput === this.redditPassword) {
      this.authService.authenticateRoute('reddit');
      this.router.navigate(['reddit']);
    } else {
      this.triggerFlash();
      this.passwordInput = '';
    }
  }
  triggerFlash() {
    this.flashBackground = true;
    setTimeout(() => {
      this.flashBackground = false;
    }, 700); 
  }
}
