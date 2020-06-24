import { Component, OnInit } from '@angular/core';

import { DataService } from "./../services/data.service";
import { Product } from '../models/product.model';
import Utils from '../utils/utils';

@Component({
  selector: 'app-route-two',
  templateUrl: './route-two.component.html',
  styleUrls: ['./route-two.component.css']
})
export class RouteTwoComponent {
  gridView: boolean = true;
  products: Product[];

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(){
    this.dataService.getJSON("products").subscribe((data) => {
      this.products = Utils.sort(data, 'price' , 0);
    });
  }

  onFilterChange(selectedFilter: number) {
    this.products = Utils.sort(this.products, 'price' , selectedFilter);
  }

  onViewChange() {
    this.gridView = !this.gridView;
  }
}

