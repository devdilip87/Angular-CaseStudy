import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { RouteTwoRoutingModule } from './route-two-routing.module';
import { DataService } from "./../services/data.service";
import { RouteTwoComponent } from './route-two.component';
import { ProductComponent } from './../components/product/product.component';
import { ProductFilterComponent } from './../components/product-filter/product-filter.component';


@NgModule({
  declarations: [
    RouteTwoComponent,
    ProductComponent,
    ProductFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouteTwoRoutingModule,
    FontAwesomeModule
  ],
  providers: [DataService]
})
export class RouteTwoModule { }
