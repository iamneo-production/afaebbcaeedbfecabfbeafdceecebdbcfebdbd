import { Component } from '@angular/core';
import { ForexService } from '../forex.service';

@Component({
  selector: 'app-forex-converter',
  templateUrl: './forex-converter.component.html',
  styleUrls: ['./forex-converter.component.css']
})
export class ForexConverterComponent {
  convertedAmount: number | undefined;
  resultMessage: string | undefined;

  constructor(private forexService: ForexService) { }

  convertCurrency(form: any) {
    const fromCurrency = form.value.fromCurrency;
    const toCurrency = form.value.toCurrency;
    const amount = form.value.amount;

    const exchangeRate = this.forexService.getExchangeRate(fromCurrency, toCurrency);

    if (!isNaN(amount)) {
      this.convertedAmount = amount * exchangeRate;
      this.resultMessage = `${amount} ${fromCurrency} = ${this.convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
      this.resultMessage = "Please enter a valid amount.";
    }
  }
}
