import { Component, OnDestroy } from '@angular/core';

import { PoSyncService } from '@po-ui/ng-sync';
import { ActivatedRoute } from '@angular/router';
import { PetsService } from 'src/app/core/services/pets.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {

  syncPrepared;
  onSyncSubscription;
  pets$;

  constructor(
    private poSync: PoSyncService,
    private petsService: PetsService,
    public activatedRoute: ActivatedRoute,
  ) {}

  ionViewWillEnter(): void {
    this.syncPrepared = this.activatedRoute.data.subscribe(() => {
      this.updatePets();
    });

    this.onSyncSubscription = this.poSync.onSync().subscribe(() => {
      this.updatePets();
    });
  }

  ngOnDestroy(): void {
    this.syncPrepared.unsubscribe();
  }

  updatePets() {
    this.pets$ = this.petsService.getAll();
  }

}
