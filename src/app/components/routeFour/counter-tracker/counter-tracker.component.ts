import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import Utils from 'src/app/utils/utils';

@Component({
  selector: 'app-counter-tracker',
  templateUrl: './counter-tracker.component.html',
  styleUrls: ['./counter-tracker.component.css']
})
export class CounterTrackerComponent implements OnInit {
  timerLog: {action: number, counter: number, dateTime: string}[];
  constructor(private counterService: CounterService, public utils: Utils) { }

  ngOnInit(): void {
    this.timerLog = this.counterService.getLog();
    this.counterService.onLogChange
      .subscribe((log) => {
        this.timerLog = log;
      });
  }

}
