import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarSeccionPage } from './agregar-seccion.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarSeccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarSeccionPageRoutingModule {}
