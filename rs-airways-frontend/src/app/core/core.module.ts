import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [HeaderComponent, LogoComponent, HeaderMenuComponent],
  imports: [CommonModule, MatModule, BrowserAnimationsModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
