import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReprobadosPageRoutingModule } from './reprobados-routing.module';

import { ReprobadosPage } from './reprobados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReprobadosPageRoutingModule
  ],
  declarations: [ReprobadosPage]
})
export class ReprobadosPageModule {}
