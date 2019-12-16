import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Router, UrlSerializer} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authChange = new Subject<boolean>();
  private isAuth = false;

 constructor(private router: Router, private afAuth: AngularFireAuth) {}

   login(authData: AuthData) {

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
   }
 }
