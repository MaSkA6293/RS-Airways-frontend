import { Component } from '@angular/core';
import { FORMATS } from '../set-date-format/constants';
import { Format } from '../set-date-format/interfaces/format.interface';
import { CURRENCY } from '../set-currency/constants';
import { Currency } from '../set-currency/interfaces/currency.interface';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
})
export class MenuMobileComponent {
  formats = FORMATS;

  currencies = CURRENCY;

  selectedFormat: Format = this.formats[0];

  selectedCurrency: Currency = this.currencies[0];

  onSelectFormat(format: Format): void {
    this.selectedFormat = format;
  }

  onSelectCurrency(currency: Currency): void {
    this.selectedCurrency = currency;
  }
}
