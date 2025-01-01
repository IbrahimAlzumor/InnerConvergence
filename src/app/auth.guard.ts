import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const routePath = route.routeConfig?.path || '';
    if (this.authService.isRouteAuthenticated(routePath)) {
      return true;
    } else {
      this.router.navigate(['']); 
      return false;
    }
  }
}
