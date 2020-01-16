import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Router, UrlSerializer} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthData} from '../login/auth-data';
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
  }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/admin']);
      } else {
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }
  login(authData: AuthData) {

   // console.log(authData.email);

    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.authSuccesfully();
      })
      .catch(error => {
        console.log(error);
      });
  }
  logout() {
    this.authChange.next(false);
    this.router.navigate(['login']);
    this.isAuthenticated = false;
  }
  isAuth() {
    return this.isAuthenticated;
  }
  private authSuccesfully() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.authChange.next(true);
    this.router.navigate(['admin']);
  }
}
