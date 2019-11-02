import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  buttons: string[] = [ '7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'C', '<', '0', '+', '=' ];
  result = '';

  private preValue = '';
  private curValue = '';

  ngOnInit() {
  }

  addValue(value: string) {
    if  (this.result !== '') {
    this.preValue = this.curValue;
    this.curValue = value;
    }
    if ((this.preValue === '+' || this.preValue === '-' || this.preValue === '/' || this.preValue === '*' )
      && (value === '+' || value === '-' || value === '/' ||  value === '*')) {
      alert('error'); } // adds error if inputted same operator twice

    if (value === 'C') {
      this.result = '';
    } else if (value === '<') {
      this.result = this.preValue !== '=' ? this.result.slice(0, -1) : this.result;
    } else if (value === '=') {
      this.result = eval(this.result);  // not forbidden in this calculator
    } else {
      this.result += value;
    }
  }
}

