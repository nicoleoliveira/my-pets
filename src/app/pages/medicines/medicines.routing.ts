import { Routes, RouterModule } from '@angular/router';
import { MedicinesComponent } from './medicines.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MedicinesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicinesRoutingModule {}
