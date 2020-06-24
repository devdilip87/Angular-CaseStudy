import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-timer',
  templateUrl: './counter-timer.component.html',
  styleUrls: ['./counter-timer.component.css']
})
export class CounterTimerComponent implements OnInit {
  @Input() timerLimit: string;
  constructor() { }

  ngOnInit(): void {
  }

}
