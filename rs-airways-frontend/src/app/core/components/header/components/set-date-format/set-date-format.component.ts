import { Component } from '@angular/core';
import { Format } from './interfaces/format.interface';
import { FORMATS } from './constants';

@Component({
  selector: 'app-set-date-format',
  templateUrl: './set-date-format.component.html',
  styleUrls: ['./set-date-format.component.scss'],
})
export class SetDateFormatComponent {
  formats = FORMATS;

  selectedFormat: Format = this.formats[0];

  onSelect(format: Format): void {
    this.selectedFormat = format;
  }
}
