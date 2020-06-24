import { Component, OnInit, Input } from '@angular/core';
import { TimerLog } from 'src/app/models/timerLog.model';
import Utils from './../../../utils/utils';

@Component({
  selector: 'app-counter-tracker',
  templateUrl: './counter-tracker.component.html',
  styleUrls: ['./counter-tracker.component.css']
})
export class CounterTrackerComponent implements OnInit {
  @Input() timerLog: TimerLog[];
  constructor(public utils: Utils) { }

  ngOnInit(): void {
  }

}
