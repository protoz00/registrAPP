import { NgModule } from '@angular/core';
import { AngularFireAuthGuard, canActivate, hasCustomClaim, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { map } from 'rxjs/operators';

    const uidAdmin = 'JlRXQfjGMYOWuwlOqb3LTxRMOo92';
    const adminOnly = () => map((user:any ) => !! user && user.iud === uidAdmin)
    const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
    
    
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

    loadChildren: () => import('./page/menu-alumno/menu-alumno.module').then( m => m.MenuAlumnoPageModule),canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'menu-profesor',

    loadChildren: () => import('./page/menu-profesor/menu-profesor.module').then( m => m.MenuProfesorPageModule),canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'seccion',
    loadChildren: () => import('./page/seccion/seccion.module').then( m => m.SeccionPageModule),canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'camara',
    loadChildren: () => import('./page/camara/camara.module').then( m => m.CamaraPageModule),canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'lista-alumnos',
    loadChildren: () => import('./page/lista-alumnos/lista-alumnos.module').then( m => m.ListaAlumnosPageModule),canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./page/asistencia/asistencia.module').then( m => m.AsistenciaPageModule),canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'modif-asistencia',
    loadChildren: () => import('./page/modif-asistencia/modif-asistencia.module').then( m => m.ModifAsistenciaPageModule),canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'reprobados',
    loadChildren: () => import('./page/reprobados/reprobados.module').then( m => m.ReprobadosPageModule),canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./page/reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./page/qr/qr.module').then( m => m.QRPageModule),canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'agregar-profesor',
    loadChildren: () => import('./page/agregar-profesor/agregar-profesor.module').then( m => m.AgregarProfesorPageModule), 
  },
  {
    path: 'agregar-seccion',
    loadChildren: () => import('./page/agregar-seccion/agregar-seccion.module').then( m => m.AgregarSeccionPageModule),
  },
  {
    path: 'agregar-clase',
    loadChildren: () => import('./page/agregar-clase/agregar-clase.module').then( m => m.AgregarClasePageModule),
  },
  {
    path: 'agregar-curso',
    loadChildren: () => import('./page/agregar-curso/agregar-curso.module').then( m => m.AgregarCursoPageModule),
  },
  {
    path: 'agregar-alumno',
    loadChildren: () => import('./page/agregar-alumno/agregar-alumno.module').then( m => m.AgregarAlumnoPageModule),
  },
  {
    path: 'conductor',
    loadChildren: () => import('./page/conductor/conductor.module').then( m => m.ConductorPageModule),
  },

  {
    path: '**',
    loadChildren: () => import('./page/e404/e404.module').then( m => m.E404PageModule)
  },

 



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }