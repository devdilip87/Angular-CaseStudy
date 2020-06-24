import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteSixRoutingModule } from './route-six-routing.module';
import { RouteSixComponent } from './route-six.component';
import { LazyLoadScrollComponent } from './lazy-load-scroll.component';
import {BoxDynamicComponent} from "./box-dynamic.component";

import { BoxPlaceholderDirective } from './box-placeholer.directive';
import { SharedService } from './shared.service';


@NgModule({
  declarations: [RouteSixComponent, LazyLoadScrollComponent, BoxDynamicComponent, BoxPlaceholderDirective],
  imports: [
    CommonModule,
    RouteSixRoutingModule
  ],
  providers: [SharedService]
})
export class RouteSixModule { }
