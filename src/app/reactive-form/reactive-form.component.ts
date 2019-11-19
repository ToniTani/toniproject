import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('keinu'),
    lastName: new FormControl('tuoli'),
    address: new FormGroup({
      city: new FormControl('tampere'),
      zipcode: new FormControl('')
    })
    });
  // name = new FormControl('');
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.profileForm);
  }

  updateProfile() {
    this.profileForm.patchValue({

    });
  }

}
