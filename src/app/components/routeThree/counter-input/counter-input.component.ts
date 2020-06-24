import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { TimerLog } from 'src/app/models/timerLog.model';
import Utils from 'src/app/utils/utils';

@Component({
  selector: 'app-counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent implements OnInit {
  @Input() timerLog: TimerLog[];
  @Input() timerLimit: string;
  @Output() startedOrPaused = new EventEmitter();
  @Output() timerReset = new EventEmitter();

  isStarted: boolean = false;
  form: FormGroup;

  constructor(public utils: Utils) {
  }

  ngOnInit(): void {
  }

  startAndPause() {
    this.isStarted = !this.isStarted;
    this.startedOrPaused.emit({limit: this.timerLimit, isStarted: this.isStarted});
  }

  reset() {
    this.timerLimit = '';
    this.isStarted = false;
    this.timerReset.emit();
  }
}
