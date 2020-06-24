import { Component, Input } from '@angular/core';
import { TimerLog } from 'src/app/models/timerLog.model';
import Utils from 'src/app/utils/utils';

@Component({
    selector: 'log',
    template: `<ul>
        <li *ngFor="let log of utils.filterLog(timerLog, logAction)"> {{ logCounter ? ('Paused At ' + log.counter) : ((log.action == 1 ? 'Started At ' : 'Paused At ') + log.dateTime) }} </li>
    </ul>`,
    styles: [`ul{
        overflow-y: scroll;
        list-style: none;
        padding: 5px;
    }`]
})
export class LogComponent {
    @Input() timerLog: TimerLog[];
    @Input() logAction = 0;
    @Input() logCounter: boolean;
    constructor(public utils: Utils) { }
}
