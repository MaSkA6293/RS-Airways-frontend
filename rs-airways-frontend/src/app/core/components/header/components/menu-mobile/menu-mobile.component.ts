import { Component } from '@angular/core';
import { FORMATS } from '../set-date-format/constants';
import { DateFormat } from '../set-date-format/interfaces/format.interface';
import { CURRENCY } from '../set-currency/constants';
import { CurrencyType } from '../set-currency/interfaces/currency.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/redux/state.model';
import { setCurrency, setDateFormat } from 'src/app/redux/actions/app.actions';
import {
  selectAppStateCurrency,
  selectAppStateFormat,
} from 'src/app/redux/selectors';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
})
export class MenuMobileComponent {
  formats = FORMATS;

  currencies = CURRENCY;

  currency$: Observable<CurrencyType>;

  dateFormat$: Observable<DateFormat>;

  constructor(private store: Store<AppStore>) {
    this.currency$ = store.select(selectAppStateCurrency);
    this.dateFormat$ = store.select(selectAppStateFormat);
  }

  onSelectFormat(dateFormat: DateFormat): void {
    this.store.dispatch(setDateFormat({ dateFormat }));
  }

  onSelectCurrency(currency: CurrencyType): void {
    this.store.dispatch(setCurrency({ currency }));
  }
}
