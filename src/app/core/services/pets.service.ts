import { Injectable } from '@angular/core';
import { PoSyncService, PoResponseApi } from '@po-ui/ng-sync';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { petSchema } from '../sync/schemas.constants';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  pets: Array<object>;

  constructor(private poSync: PoSyncService) { }

  getAll() {
    // return this.poSync
    //     .getModel(petSchema.name)
    //     .find()
    //     .exec()
    //     .then((data: PoResponseApi) => {
    //     // this.pets = data.items
    //     console.log('data: ', data.items);
    //     return data.items;
    //   });
    return from(
      this.poSync
        .getModel(petSchema.name)
        .find()
        .exec()
    ).pipe(
      map((data: PoResponseApi) => data.items)
    );
    // ).pipe(
    //   map((data: PoResponseApi) => {
    //     // this.pets = data.items
    //     console.log('data: ', data.items);
    //     return data.items;
    //   })
    // );
  }

  synchronize() {
    return this.poSync.sync();
  }

}
