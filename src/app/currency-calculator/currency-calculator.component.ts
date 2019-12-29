import {Component, OnInit} from '@angular/core';
import {Currency} from './currency';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.css']
})
export class CurrencyCalculatorComponent implements OnInit {

  title = 'currency-calculator';
  rates: Currency; // present and existing currency rates
  currencyList = [''];
  Url = 'https://api.exchangeratesapi.io/latest'; // 'service' added to this component without rxjs observable

  inputValue: number; // value from input field
  primaryCurrency: string; // 'Convert From' currency, euro is default at the beginning

  toCurrency: string; // 'Convert To'
  toRate: number; // basically the current rate from api

  // component variables for currency calculations
  answer: number;
  answerInputValue: number;
  answerPrimaryCurrency: string;
  answerRate: number;
  answerCurrency: string;


  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.inputValue = 1; // base value is always 1 to avoid errors and keep app working without errors
    this.toCurrency = 'AUD';
    this.updateRates(null, false);
  }

  public updateRates(currency: string, calculate: boolean): void {

 // runs url when page is loaded and updates values

    this.http.get<Currency>(this.getApiUrl(currency)) // GET request and subscribe from API and Currency interface
      .subscribe((resp) => {
          this.rates = resp;
          this.formatValues(resp);  // Currency data from api assigned to the rates with response
          if (calculate) {
            this.calculateRate();
          }
        }
      );
  }

  public getApiUrl(currency: string): string { // shows calculations on screen eventually
    if (currency) {
      return this.Url + '?currency=' + currency;
    }
    return this.Url;
  }

  formatValues(resp: Currency): void {
    if (this.currencyList.length === 1) {

      this.primaryCurrency = resp.base; // initialize primary/default to Eur
      this.toRate = this.rates.rates['AUD'];
      this.createCurrencyList();

    }
  }

  createCurrencyList(): void {  // Creates list of currencies coming from Api

    if (this.currencyList.length === 1) {

      this.currencyList = Object.keys(this.rates.rates);
      this.currencyList.push('EUR'); // Eur forced to primary value with push and sort alphabetically
      this.currencyList.sort();
    }
  }


  // function to 'Convert' button
  convertRates(): void {
    this.updateRates(this.primaryCurrency, true); // updates value based on number inputted on the input box
  }

  public onChangeInputValue(event): void {  // event handler for inputted number (Amount) values
    this.inputValue = event.target.value;
  }

  public onConvertFrom(event): void {  // event handler for 'convert from'
    this.primaryCurrency = event.target.value;
  }

  public onConvertTo(event): void { // event handler for 'convert to'
    this.toCurrency = event.target.value;
  }

  public calculateRate(): void {

    this.toRate = this.rates.rates[`${this.toCurrency}`]; // calculates current currency rates

    this.answer = this.transformRates(this.toCurrency, this.inputValue ); // calculations to answer

    this.answerInputValue = this.inputValue;
    this.answerPrimaryCurrency = this.primaryCurrency;
    this.answerRate = this.toRate;
    this.answerCurrency = this.toCurrency;
  }

  public transformRates(currency: string, amount: number): number {  // Only numbers should be allowed
    return this.rates.rates[currency] * amount ; // multiply the currency rate * amount
    // return parseFloat(currency.fixed(2)); // not gonna use decimal rounding
  }
}
