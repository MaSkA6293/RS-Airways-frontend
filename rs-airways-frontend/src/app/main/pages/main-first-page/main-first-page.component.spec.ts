import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFirstPageComponent } from './main-first-page.component';

describe('MainFirstPageComponent', () => {
  let component: MainFirstPageComponent;
  let fixture: ComponentFixture<MainFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFirstPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
