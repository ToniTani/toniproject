import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';

import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
declare var NgForm: any;
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  this.registerForm = this.fb.group({
    firstName: ['keinu', [Validators.required, Validators.minLength(2)]],
    lastName: ['tuoli', [Validators.required, Validators.minLength(2)]],
    personId: [''],
    emailAddress: ['jee@jee.com', [Validators.required, Validators.email]],
    // accountDetails: this.fb.group({
    username: ['', [Validators.required ]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });
  }
  get fval() {
    return this.registerForm.controls;
  }
  onSubmit() {
    // console.log(this.profileForm.value);
  }

  submit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('form fields are validated successfully!');
  }
}
