import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
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

  isStarted = false;
  disabled = false;
  timerForm: FormGroup;

  constructor(private counterService: CounterService, public utils: Utils) { }

  ngOnInit(): void {
    this.timerForm = new FormGroup({
      timerLimit: new FormControl({ value: null, disabled: this.disabled }, [Validators.required, Validators.pattern('^[1-9][0-9]*$')])
    });
    this.timerLog = this.counterService.getLog();
    this.counterService.onLogChange
      .subscribe((log: TimerLog[]) => {
        this.timerLog = log;
      });
  }

  startAndPause() {
    this.isStarted = !this.isStarted;
    this.counterService.onTimerStartPause.emit({limit: this.timerForm.get('timerLimit').value, isStarted: this.isStarted});
  }

  reset() {
    this.timerForm.reset();
    this.isStarted = false;
    this.counterService.onTimerRest.emit();
  }

}
