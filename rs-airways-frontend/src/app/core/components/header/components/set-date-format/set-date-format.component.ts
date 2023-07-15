import { Component } from '@angular/core';
import { DateFormat } from './interfaces/format.interface';
import { FORMATS } from './constants';
import { setDateFormat } from 'src/app/redux/actions/app.actions';
import { Observable } from 'rxjs';
import { selectAppStateFormat } from 'src/app/redux/selectors';
import { AppStore } from 'src/app/redux/state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-set-date-format',
  templateUrl: './set-date-format.component.html',
  styleUrls: ['./set-date-format.component.scss'],
})
export class SetDateFormatComponent {
  formats = FORMATS;

  dateFormat$: Observable<DateFormat>;

  constructor(private store: Store<AppStore>) {
    this.dateFormat$ = store.select(selectAppStateFormat);
  }

  onSelect(dateFormat: DateFormat): void {
    this.store.dispatch(setDateFormat({ dateFormat }));
  }
}
