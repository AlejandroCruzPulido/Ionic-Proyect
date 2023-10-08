import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarUpdatePageRoutingModule } from './car-update-routing.module';

import { CarUpdatePage } from './car-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarUpdatePageRoutingModule
  ],
  declarations: [CarUpdatePage]
})
export class CarUpdatePageModule {}
