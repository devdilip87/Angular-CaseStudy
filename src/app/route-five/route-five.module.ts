import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteFiveRoutingModule } from './route-five-routing.module';
import { RouteFiveComponent } from './route-five.component';
import { DataService } from "./../services/data.service";


@NgModule({
  declarations: [RouteFiveComponent],
  imports: [
    CommonModule,
    RouteFiveRoutingModule
  ],
  providers: [DataService]
})
export class RouteFiveModule { }
