import { createAction, props } from '@ngrx/store';
import { CurrencyType } from 'src/app/core/components/header/components/set-currency/interfaces/currency.interface';

export const setDateFormat = createAction('[Header Component] Set date format');
export const setCurrency = createAction(
  '[Header Component] Set currency',
  props<{ currency: CurrencyType }>(),
);
