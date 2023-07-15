import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormatItemComponent } from './date-format-item.component';

describe('DateFormatItemComponent', () => {
  let component: DateFormatItemComponent;
  let fixture: ComponentFixture<DateFormatItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateFormatItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DateFormatItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
