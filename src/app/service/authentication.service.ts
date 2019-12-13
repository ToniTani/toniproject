import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Router, UrlSerializer} from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthoService {
//   authChange = new Subject<boolean>();
//   private is; authenticated = false;
//
//  /!*constructor(private router: Router, private afAuth: AngularFireAuth) {
//
//    login(authData: AuthData) {
//
//        this.afAuth.auth
//          .signInWithEmailAndPassword(authData.email, authData.password)
//          .then(result => {
//            console.log(result);
//            this.authSuccesfully();
//          })
//          .catch(error => {
//            console.log(error);
//          });
//      }
//    }
//  }}
