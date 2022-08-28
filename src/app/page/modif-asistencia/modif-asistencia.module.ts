import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifAsistenciaPageRoutingModule } from './modif-asistencia-routing.module';

import { ModifAsistenciaPage } from './modif-asistencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifAsistenciaPageRoutingModule
  ],
  declarations: [ModifAsistenciaPage]
})
export class ModifAsistenciaPageModule {}
