import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainFirstPageComponent } from './pages/main-first-page/main-first-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainFirstPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
