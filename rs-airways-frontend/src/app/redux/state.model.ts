import { CurrencyType } from '../core/components/header/components/set-currency/interfaces/currency.interface';
import { DateFormat } from '../core/components/header/components/set-date-format/interfaces/format.interface';

export interface AppStore {
  app: AppState;
}

export interface AppState {
  dateFormat: DateFormat;
  currency: CurrencyType;
}
