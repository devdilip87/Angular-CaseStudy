import { Component, OnInit, Input } from '@angular/core';
import { TimerLog } from 'src/app/models/timerLog.model';

@Component({
  selector: 'app-counter-log',
  templateUrl: './counter-log.component.html',
  styleUrls: ['./counter-log.component.css']
})
export class CounterLogComponent implements OnInit {
  @Input() timerLog: TimerLog[];
  constructor() { }

  ngOnInit(): void {
  }

}
