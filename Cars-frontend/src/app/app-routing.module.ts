import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'car-list',
    loadChildren: () => import('./car-list/car-list.module').then( m => m.CarListPageModule)
  },
  {
    path: 'car-add',
    loadChildren: () => import('./car-add/car-add.module').then( m => m.CarAddPageModule)
  },
  {
    path: 'car-update/:id',
    loadChildren: () => import('./car-update/car-update.module').then( m => m.CarUpdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
