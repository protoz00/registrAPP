import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarSeccionPageRoutingModule } from './agregar-seccion-routing.module';

import { AgregarSeccionPage } from './agregar-seccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarSeccionPageRoutingModule
  ],
  declarations: [AgregarSeccionPage]
})
export class AgregarSeccionPageModule {}
