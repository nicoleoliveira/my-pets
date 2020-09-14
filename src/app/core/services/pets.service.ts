import { Injectable } from '@angular/core';

import { PoSyncService, PoResponseApi } from '@po-ui/ng-sync';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

import { petSchema } from '../sync/schemas.constants';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  pets: Array<object>;

  constructor(private poSync: PoSyncService) { }

  getAll() {
    return from(
      this.poSync
        .getModel(petSchema.name)
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
