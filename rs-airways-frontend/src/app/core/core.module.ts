import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../mat/angular-material.module';
import { SetDateFormatComponent } from './components/set-date-format/set-date-format.component';
import { SetCurrencyComponent } from './components/set-currency/set-currency.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    HeaderMenuComponent,
    SetDateFormatComponent,
    SetCurrencyComponent,
  ],
  imports: [CommonModule, AngularMaterialModule, BrowserAnimationsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
