import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { SyncService } from './sync.service';

@Injectable({
  providedIn: 'root'
})
export class SyncResolverService implements Resolve<Observable<boolean>> {

  constructor(private syncService: SyncService) { }

  resolve(): Observable<boolean> {
    return this.syncService.init();
  }

}
