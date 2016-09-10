import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserProvider } from '../common/providers/user.provider';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private user: UserProvider, private router: Router) {}

  canActivate() {
    if (!this.user.isLoggedIn()) {
        this.router.navigate(['/auth']);
        return false;
    }

    return true;
  }
}
