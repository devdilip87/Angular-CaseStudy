import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { TimerLog } from 'src/app/models/timerLog.model';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-timer',
  templateUrl: './counter-timer.component.html',
  styleUrls: ['./counter-timer.component.css']
})
export class CounterTimerComponent implements OnInit {
  private countDownDubscription: Subscription;
  countDown: number;
  timerLog: TimerLog[] = [];
  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.countDown = this.counterService.getCountDown();
    this.counterService.onTimerStartPause
      .subscribe((data: {isStarted: boolean, limit: string}) => {
        this.onStartAndPause(data);
      });

    this.counterService.onTimerRest
      .subscribe(() => {
        this.onTimerReset();
      });
  }

  onStartAndPause(data: {isStarted: boolean, limit: string}) {
    if(data.isStarted){
      this.countDown = this.countDown > 0 ? this.countDown: +data.limit;
      
      this.timerLog.push({action: 1, counter: this.countDown, dateTime: new Date().toString()});
      this.counterService.updateLog(this.timerLog);
      this.updateCountDown();
    }
    else{
      this.countDownUnsubscribe();
      this.timerLog.push({action: 2, counter: this.countDown, dateTime: new Date().toString()});
      this.counterService.updateLog(this.timerLog);
      
    }
  }
  updateCountDown() {
    this.countDownDubscription = interval(1000).subscribe(() => {
      this.countDown--;
      if(this.countDown === 0) {
        this.countDownUnsubscribe();
      }
    });
  }

  onTimerReset() {
    if(this.countDownDubscription) {
      this.countDownUnsubscribe();
    }
    this.timerLog = [];
    this.counterService.updateLog(this.timerLog);
    this.countDown = null;
  }

  ngOnDestroy() {
    this.onTimerReset();
  }

  countDownUnsubscribe() {
    this.countDownDubscription.unsubscribe();
  }

}
