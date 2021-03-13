import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCalculatorComponent } from './currency-calculator.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Currency} from './currency';

describe('WebClientComponent', () => {
  let component: CurrencyCalculatorComponent;
  let fixture: ComponentFixture<CurrencyCalculatorComponent>;
  let httpsTestCtrl: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ CurrencyCalculatorComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.get(CurrencyCalculatorComponent);
    httpsTestCtrl = TestBed.get(HttpTestingController);
  });

  it('should test rates api get method', () => {
    const testCurrency: Currency[] = [
      {base: 'EUR', date: '2019-06-29', rates: {} }
    ];
    expect(testCurrency).toBe(testCurrency, 'should check mocked data');
  });
});
