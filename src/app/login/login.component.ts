import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {AuthenticationService} from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
     providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', )
    }),
      password: new FormControl('', )
    });
  }

  onSubmit() {
  this.authenticationService.login({
    email: this.loginForm.value.email,
    password: this.loginForm.value.password
  });
}
