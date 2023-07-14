import { Component, Input } from '@angular/core';
import { Format } from '../set-date-format/interfaces/format.interface';

@Component({
  selector: 'app-date-format-item',
  templateUrl: './date-format-item.component.html',
  styleUrls: ['./date-format-item.component.scss'],
})
export class DateFormatItemComponent {
  @Input() format?: Format;

  @Input() isActive = false;
}
