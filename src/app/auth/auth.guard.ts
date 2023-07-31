import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authenticated = inject(AuthService).isAuthenticated();

  if(authenticated) {
    return true;
  } else {
    inject(Router).navigate(['login']);
    return false;
  }
};
