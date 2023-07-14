import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDateFormatComponent } from './set-date-format.component';

describe('SetupDateFormatComponent', () => {
  let component: SetDateFormatComponent;
  let fixture: ComponentFixture<SetDateFormatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetDateFormatComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SetDateFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
