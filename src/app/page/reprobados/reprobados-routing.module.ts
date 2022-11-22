import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReprobadosPage } from './reprobados.page';

const routes: Routes = [
  {
    path: '',
    component: ReprobadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReprobadosPageRoutingModule {}
