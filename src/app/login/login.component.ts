import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
     providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', { validators: [Validators.required] })
    });
  }

  onSubmit() {
      this.authenticationService.login({
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      });
    }
  }
  //     password: new FormControl()
  //   //   validators: [Validators.required, Validators.password ]})
  //   });
  // }

//   onSubmit() {
//     this.authenticationService.login(this.formGroup.value.email, this.formGroup.value.password);
//   }
