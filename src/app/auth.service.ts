import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authenticatedRoutes: Set<string> = new Set();

  authenticateRoute(route: string): void {
    this.authenticatedRoutes.add(route);
  }

  isRouteAuthenticated(route: string): boolean {
    return this.authenticatedRoutes.has(route);
  }

  clearAuthenticatedRoutes(): void {
    this.authenticatedRoutes.clear();
  }
}
