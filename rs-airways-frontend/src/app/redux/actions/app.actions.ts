import { createAction, props } from '@ngrx/store';
import { CurrencyType } from 'src/app/core/components/header/components/set-currency/interfaces/currency.interface';
import { DateFormat } from 'src/app/core/components/header/components/set-date-format/interfaces/format.interface';

export const setDateFormat = createAction(
  '[Header Component] Set date format',
  props<{ dateFormat: DateFormat }>(),
);
export const setCurrency = createAction(
  '[Header Component] Set currency',
  props<{ currency: CurrencyType }>(),
);
