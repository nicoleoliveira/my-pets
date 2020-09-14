import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SyncResolverService } from './core/sync/sync-resolver.service';

const routes: Routes = [
  {
    path: '',
    resolve: { syncPrepared: SyncResolverService },
    children: [

      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'medicines',
        loadChildren: () => import('./pages/medicines/medicines.module').then( m => m.MedicinesModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
