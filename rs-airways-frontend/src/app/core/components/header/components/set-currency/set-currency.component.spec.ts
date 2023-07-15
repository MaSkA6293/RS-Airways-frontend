import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCurrencyComponent } from './set-currency.component';

describe('SetCurrencyComponent', () => {
  let component: SetCurrencyComponent;
  let fixture: ComponentFixture<SetCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SetCurrencyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SetCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
