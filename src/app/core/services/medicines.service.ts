import { Injectable } from '@angular/core';

import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { PoSyncService, PoResponseApi } from '@po-ui/ng-sync';

import { medicinesSchema } from '../sync/schemas.constants';

@Injectable({
  providedIn: 'root'
})
export class MedicinesService {

  medicines: Array<object>;

  constructor(private poSync: PoSyncService) { }

  getAll() {
    return from(
      this.poSync
        .getModel(medicinesSchema.name)
        .find()
        .exec()
    ).pipe(
      map((data: PoResponseApi) => data.items)
    );
  }

  synchronize() {
    return this.poSync.sync();
  }

}
