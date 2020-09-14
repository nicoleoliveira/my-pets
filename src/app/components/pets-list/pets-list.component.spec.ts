/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetsListComponent } from './pets-list.component';

describe('PetsListComponent', () => {
  let component: PetsListComponent;
  let fixture: ComponentFixture<PetsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
