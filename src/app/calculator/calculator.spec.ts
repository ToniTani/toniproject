import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './Calculator.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ], })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
  it('Testing component name', () => {
    expect(component.componentName).toBe('calculator');
  });
  it('Testing calculator function', () => {
    expect(component.addValue).toBeTruthy();
  });
});
