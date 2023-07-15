import { createReducer, on } from '@ngrx/store';
import { AppState } from '../state.model';
import { DateFormat } from 'src/app/core/components/header/components/set-date-format/interfaces/format.interface';
import { CurrencyType } from 'src/app/core/components/header/components/set-currency/interfaces/currency.interface';
import { setDateFormat, setCurrency } from '../actions/app.actions';

export const initialState: AppState = {
  dateFormat: DateFormat.MDY,
  currency: CurrencyType.EUR,
};

export const appReducer = createReducer(
  initialState,
  on(setDateFormat, (state) => state),
  on(setCurrency, (state, { currency }) => ({ ...state, currency })),
  on(setDateFormat, (state, { dateFormat }) => ({ ...state, dateFormat })),
);
