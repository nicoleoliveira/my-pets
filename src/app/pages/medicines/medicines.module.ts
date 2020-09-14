import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicinesComponent } from './medicines.component';
import { MedicinesRoutingModule } from './medicines.routing';

@NgModule({
  imports: [
    CommonModule,
    MedicinesRoutingModule
  ],
  declarations: [MedicinesComponent]
})
export class MedicinesModule { }
