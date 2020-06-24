import { Component, OnInit } from '@angular/core';
import { CounterService } from "./../services/counter.service";
import Utils from '../utils/utils';

@Component({
  selector: 'app-route-four',
  templateUrl: './route-four.component.html',
  styleUrls: ['./route-four.component.css'],
  providers: [CounterService, Utils]
})
export class RouteFourComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
