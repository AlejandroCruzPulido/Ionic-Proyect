import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarUpdatePage } from './car-update.page';

const routes: Routes = [
  {
    path: '',
    component: CarUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarUpdatePageRoutingModule {}
