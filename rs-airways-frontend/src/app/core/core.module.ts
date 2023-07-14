import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SetDateFormatComponent } from './components/set-date-format/set-date-format.component';
import { SetCurrencyComponent } from './components/set-currency/set-currency.component';
import { MenuRegularComponent } from './components/menu-regular/menu-regular.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';
import { DateFormatItemComponent } from './components/date-format-item/date-format-item.component';
import { CurrencyItemComponent } from './components/currency-item/currency-item.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    HeaderMenuComponent,
    SetDateFormatComponent,
    SetCurrencyComponent,
    MenuRegularComponent,
    MenuMobileComponent,
    DateFormatItemComponent,
    CurrencyItemComponent,
    SignInComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, BrowserAnimationsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
