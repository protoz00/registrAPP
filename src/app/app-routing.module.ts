import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pagina1',
    loadChildren: () => import('./page/pagina1/pagina1.module').then( m => m.Pagina1PageModule)
  },
  {
    path: 'menu-alumno',
    loadChildren: () => import('./page/menu-alumno/menu-alumno.module').then( m => m.MenuAlumnoPageModule)
  },
  {
    path: 'menu-profesor',
    loadChildren: () => import('./page/menu-profesor/menu-profesor.module').then( m => m.MenuProfesorPageModule)
  },
  {
    path: 'seccion',
    loadChildren: () => import('./page/seccion/seccion.module').then( m => m.SeccionPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./page/camara/camara.module').then( m => m.CamaraPageModule)
  },
  {
    path: 'lista-alumnos',
    loadChildren: () => import('./page/lista-alumnos/lista-alumnos.module').then( m => m.ListaAlumnosPageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./page/codigo-qr/codigo-qr.module').then( m => m.CodigoQrPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./page/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'modif-asistencia',
    loadChildren: () => import('./page/modif-asistencia/modif-asistencia.module').then( m => m.ModifAsistenciaPageModule)
  },

 



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
