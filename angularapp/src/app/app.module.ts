import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';
import { CurrencyformComponent } from './currencyform/currencyform.component';
import { ResultComponent } from './result/result.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { CurrencyResultComponent } from './currency-result/currency-result.component';
import { ForexConverterComponent } from './forex-converter/forex-converter.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyconverterComponent,
    CurrencyformComponent,
    ResultComponent,
    CurrencyConverterComponent,
    CurrencyFormComponent,
    CurrencyResultComponent,
    ForexConverterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
