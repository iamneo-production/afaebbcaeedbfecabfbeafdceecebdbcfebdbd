import { Component } from '@angular/core';

@Component({
  selector: 'app-forex-converter',
  templateUrl: './forex-converter.component.html',
  styleUrls: ['./forex-converter.component.css']
})
export class ForexConverterComponent {
  exchangeRates = {
    USD: 1.126735,
    GBP: 0.876893,
    INR: 79.677056
  };

  convertedAmount: number | null = null;

  convertCurrency(formData: any): void {
    const fromCurrency = formData.fromCurrency;
    const toCurrency = formData.toCurrency;
    const amount = parseFloat(formData.amount);

    if (isNaN(amount)) {
      this.convertedAmount = null;
      return;
    }

    if (fromCurrency === toCurrency) {
      this.convertedAmount = amount;
    } else {
      const conversionRate = this.exchangeRates[fromCurrency] / this.exchangeRates[toCurrency];
      this.convertedAmount = amount * conversionRate;
    }
  }
}
