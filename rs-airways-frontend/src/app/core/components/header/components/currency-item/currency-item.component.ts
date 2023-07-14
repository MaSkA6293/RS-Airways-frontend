import { Component, Input } from '@angular/core';
import { Currency } from '../set-currency/interfaces/currency.interface';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.scss'],
})
export class CurrencyItemComponent {
  @Input() currency?: Currency;

  @Input() isActive = false;
}
