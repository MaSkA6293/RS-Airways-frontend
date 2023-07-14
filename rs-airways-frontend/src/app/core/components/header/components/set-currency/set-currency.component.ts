import { Component } from '@angular/core';
import { CURRENCY } from './constants';
import { CurrencyType } from './interfaces/currency.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/redux/state.model';
import { setCurrency } from 'src/app/redux/actions/app.actions';
import { selectAppCurrency } from 'src/app/redux/selectors';

@Component({
  selector: 'app-set-currency',
  templateUrl: './set-currency.component.html',
  styleUrls: ['./set-currency.component.scss'],
})
export class SetCurrencyComponent {
  currencies = CURRENCY;

  // selectedCurrency: CurrencyType = this.currencies[0].name;

  currency$: Observable<CurrencyType>;

  constructor(private store: Store<AppStore>) {
    this.currency$ = store.select(selectAppCurrency);
  }

  onSelect(currency: CurrencyType): void {
    // this.selectedCurrency = currency;
    this.store.dispatch(setCurrency({ currency }));
  }
}
