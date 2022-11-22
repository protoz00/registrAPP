import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifAsistenciaPage } from './modif-asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: ModifAsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifAsistenciaPageRoutingModule {}
