import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import {AuthenticationService} from './authentication.service';

@Injectable()

export class AuthGuard implements CanActivate {
constructor(private authenticationService: AuthenticationService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  if (this.authenticationService.isAuth()) {
    return true;
  } else {
    this.router.navigate(['login']);
  }
}
}
