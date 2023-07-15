import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/components/logo/logo.component';
import { HeaderMenuComponent } from './components/header/components/header-menu/header-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SetDateFormatComponent } from './components/header/components/set-date-format/set-date-format.component';
import { SetCurrencyComponent } from './components/header/components/set-currency/set-currency.component';
import { MenuRegularComponent } from './components/header/components/menu-regular/menu-regular.component';
import { SignInComponent } from './components/header/components/sign-in/sign-in.component';
import { CurrencyItemComponent } from './components/header/components/currency-item/currency-item.component';
import { DateFormatItemComponent } from './components/header/components/date-format-item/date-format-item.component';
import { MenuMobileComponent } from './components/header/components/menu-mobile/menu-mobile.component';

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
