/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SyncResolverService } from './sync-resolver.service';

describe('Service: SyncResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SyncResolverService]
    });
  });

  it('should ...', inject([SyncResolverService], (service: SyncResolverService) => {
    expect(service).toBeTruthy();
  }));
});
