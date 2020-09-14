import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsListComponent } from './pets-list/pets-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PetsListComponent
  ],
  exports: [
    PetsListComponent
  ]
})
export class ComponentsModule { }
