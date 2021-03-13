import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComponent } from './reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('ReactiveForm', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ ReactiveFormComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('if form invalid', () => { // testing form invalidity
    expect(component.form.validity).toBeFalsy();
  });
  it('if form valid', () => { // testing form invalidity
    expect(component.form.validity).not.toBeTruthy();
  });

  // it('email field validity', () => {
  //   let email = component.form.controls['email'];
  //   expect(email.valid).toBeFalsy();
  //
  //   let errors = {};
  //   errors = email.errors || {};
  //   expect(errors['required']).toBeTruthy();
  //
  //   email.setValue("test");
  //   errors = email.errors || {};
  //   expect(errors['pattern']).toBeTruthy();
  // });
});
