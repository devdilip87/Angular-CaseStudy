import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteFourRoutingModule } from './route-four-routing.module';
import { CounterService } from './../services/counter.service';
import { RouteFourComponent } from './route-four.component';
import { CounterInputComponent } from './../components/routeFour/counter-input/counter-input.component';
import { CounterTimerComponent } from './../components/routeFour/counter-timer/counter-timer.component';
import { CounterLogComponent } from './../components/routeFour/counter-log/counter-log.component';
import { CounterTrackerComponent } from './../components/routeFour/counter-tracker/counter-tracker.component';


@NgModule({
  declarations: [
    RouteFourComponent,
    CounterInputComponent,
    CounterTimerComponent,
    CounterLogComponent,
    CounterTrackerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouteFourRoutingModule
  ],
  providers: []
})
export class RouteFourModule { }
