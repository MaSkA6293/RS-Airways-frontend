import { Component } from '@angular/core';
import { CURRENCY } from './constants';
import { Currency } from './interfaces/currency.interface';

@Component({
  selector: 'app-set-currency',
  templateUrl: './set-currency.component.html',
  styleUrls: ['./set-currency.component.scss'],
})
export class SetCurrencyComponent {
  currencies = CURRENCY;

  selectedCurrency: Currency = this.currencies[0];

  onSelect(currency: Currency): void {
    this.selectedCurrency = currency;
  }
}
