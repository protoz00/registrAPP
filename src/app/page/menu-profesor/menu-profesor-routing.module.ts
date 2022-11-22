import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuProfesorPage } from './menu-profesor.page';
import { Pagina1Page } from '../pagina1/pagina1.page';

const routes: Routes = [
  {
    path: '',
    component: MenuProfesorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
            
  exports: [RouterModule],
  
})
export class MenuProfesorPageRoutingModule {}
