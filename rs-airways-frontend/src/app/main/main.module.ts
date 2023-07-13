import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFirstPageComponent } from './pages/main-first-page/main-first-page.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  declarations: [MainFirstPageComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
