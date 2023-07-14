import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRegularComponent } from './menu-regular.component';

describe('MenuRegularComponent', () => {
  let component: MenuRegularComponent;
  let fixture: ComponentFixture<MenuRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuRegularComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
