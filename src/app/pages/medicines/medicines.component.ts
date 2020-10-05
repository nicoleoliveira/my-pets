import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PoSyncService } from '@po-ui/ng-sync';

import { MedicinesService } from 'src/app/core/services/medicines.service';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  syncPrepared;
  onSyncSubscription;
  medicines$;

  constructor(
    private poSync: PoSyncService,
    private medicinesService: MedicinesService,
    public activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.syncPrepared = this.activatedRoute.data.subscribe(() => {
      this.updateMedicines();
    });

    this.onSyncSubscription = this.poSync.onSync().subscribe(() => {
      this.updateMedicines();
    });
  }

  updateMedicines() {
    this.medicines$ = this.medicinesService.getAll();
  }

}
