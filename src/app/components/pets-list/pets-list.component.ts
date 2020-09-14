import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  @Input() pets: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
