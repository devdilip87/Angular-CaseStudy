import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerLog } from './../models/timerLog.model';
import Utils from '../utils/utils';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.css'],
  providers: [Utils]
})
export class RouteThreeComponent implements OnInit, OnDestroy {

  private countDownDubscription: Subscription;
  timerLog: TimerLog[] = [];
  timerLimit = '';
  countDown: number;

  constructor() { }

  ngOnInit(): void {
  }

  onStartAndPause(data: {isStarted: boolean, limit: string}) {
    if (data.isStarted){
      this.countDown = this.countDown > 0 ? this.countDown : +data.limit;
      this.timerLog.push({action: 1, counter: this.countDown, dateTime: new Date().toString()});
      this.updateCountDown();
    }
    else{
      this.countDownUnsubscribe();
      this.timerLog.push({action: 2, counter: this.countDown, dateTime: new Date().toString()});

    }
  }
  updateCountDown() {
    this.countDownDubscription = interval(1000).subscribe(() => {
      this.countDown--;
      if (this.countDown === 0) {
        this.countDownUnsubscribe();
      }
    });
  }

  onTimerReset() {
    if (this.countDownDubscription) {
      this.countDownUnsubscribe();
    }
    this.timerLog = [];
    this.timerLimit = '';
    this.countDown = null;
  }

  ngOnDestroy() {
    this.onTimerReset();
  }

  countDownUnsubscribe() {
    this.countDownDubscription.unsubscribe();
  }

}

