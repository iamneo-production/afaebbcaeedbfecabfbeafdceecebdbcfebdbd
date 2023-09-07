import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fromCurrency: string = 'USD';
  toCurrency: string = 'USD';
  amount: number = 1;
  convertedAmount: number = 1;

  exchangeRates: { [key: string]: number } = {
    'USD': 1.126735,
    'GBP': 0.876893,
    'INR': 79.677056
  };

  convertCurrency() {
    const fromRate = this.exchangeRates[this.fromCurrency];
    const toRate = this.exchangeRates[this.toCurrency];
    this.convertedAmount = (this.amount / fromRate) * toRate;
  }
}
