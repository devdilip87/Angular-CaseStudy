import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteOneRoutingModule } from './route-one-routing.module';
import { RouteOneComponent } from './route-one.component';
import { DataService } from './../services/data.service';


@NgModule({
  declarations: [RouteOneComponent],
  imports: [
    CommonModule,
    RouteOneRoutingModule
  ],
  providers: [DataService]
})
export class RouteOneModule { }
