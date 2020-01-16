import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})

export class TemplateFormComponent {

  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model));
  }
}

//   userForm: FormGroup;
//   errorMatcher = new CrossFieldErrorMatcher();
//
//   constructor(private fb: FormBuilder) {
//     this.initForm();
//   }
//
//   initForm() {
//     this.userForm = this.fb.group({
//       firstName: '',
//       lastName: '',
//       email: '',
//       personId: '',
//       password: '',
//       confirmPassword: ''
//     }, {
//       validator: this.passwordValidator
//     });
//   }
//
//   passwordValidator(form: FormGroup) {
//     const condition = form.get('password').value !== form.get('confirmPassword').value;
//
//     return condition ? { passwordsDoNotMatch: true} : null;
//   }
//
//
//   onSubmit() {
//   console.log(form);
//   }
// }
