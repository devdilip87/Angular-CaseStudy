import { EventEmitter } from '@angular/core';
import { TimerLog } from '../models/timerLog.model';

export class CounterService {
    onTimerStartPause = new EventEmitter();
    onTimerRest = new EventEmitter();
    onLogChange = new EventEmitter();
    private timerLog: TimerLog[] = [];
    private countDown: number;

   constructor() {
    }

    public getLog() {
        return this.timerLog.slice();
    }

    /**
     * getCountDown
     */
    public getCountDown() {
        return this.countDown;
    }

    /**
     * setCounter
     */
    public updateLog(log: TimerLog[]) {
        this.timerLog = log;
        this.onLogChange.emit(this.timerLog);
    }
}