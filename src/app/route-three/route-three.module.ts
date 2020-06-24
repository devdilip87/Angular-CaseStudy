import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { ProductsService } from "./../shared/products.service";
import { RouteThreeRoutingModule } from './route-three-routing.module';
import { RouteThreeComponent } from './route-three.component';
import { CounterInputComponent } from './../components/routeThree/counter-input/counter-input.component';
import { CounterTimerComponent } from './../components/routeThree/counter-timer/counter-timer.component';
import { CounterLogComponent } from './../components/routeThree/counter-log/counter-log.component';
import { CounterTrackerComponent } from './../components/routeThree/counter-tracker/counter-tracker.component';
import { LogComponent } from './../components/log/log.component';


@NgModule({
  declarations: [
    RouteThreeComponent,
    CounterInputComponent,
    CounterTimerComponent,
    CounterLogComponent,
    CounterTrackerComponent,
    LogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteThreeRoutingModule
  ],
  providers: []
})
export class RouteThreeModule { }
