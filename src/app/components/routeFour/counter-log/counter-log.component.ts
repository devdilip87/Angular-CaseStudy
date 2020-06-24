import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { TimerLog } from 'src/app/models/timerLog.model';
import Utils from 'src/app/utils/utils';

@Component({
  selector: 'app-counter-log',
  templateUrl: './counter-log.component.html',
  styleUrls: ['./counter-log.component.css']
})
export class CounterLogComponent implements OnInit {
  timerLog: TimerLog[];
  constructor(private counterService: CounterService, private utils: Utils) { }

  ngOnInit(): void {
    this.timerLog = this.counterService.getLog();

    this.counterService.onLogChange
      .subscribe((log: TimerLog[]) => {
        this.timerLog = log;
      });
  }

}
