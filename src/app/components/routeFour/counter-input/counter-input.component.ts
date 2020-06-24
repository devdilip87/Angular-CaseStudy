import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { TimerLog } from 'src/app/models/timerLog.model';
import Utils from 'src/app/utils/utils';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  timerLog: TimerLog[];
  timerLimit = '';

  isStarted = false;

  constructor(private counterService: CounterService, public utils: Utils) { }

  ngOnInit(): void {
    this.timerLog = this.counterService.getLog();
    this.counterService.onLogChange
      .subscribe((log: TimerLog[]) => {
        this.timerLog = log;
      });
  }

  startAndPause() {
    this.isStarted = !this.isStarted;
    this.counterService.onTimerStartPause.emit({limit: this.timerLimit, isStarted: this.isStarted});
  }

  reset() {
    this.timerLimit = '';
    this.isStarted = false;
    this.counterService.onTimerRest.emit();
  }

}
