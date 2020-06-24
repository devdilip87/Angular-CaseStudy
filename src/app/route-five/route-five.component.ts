import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import Utils from '../utils/utils';

@Component({
  selector: 'app-route-five',
  templateUrl: './route-five.component.html',
  styleUrls: ['./route-five.component.css']
})
export class RouteFiveComponent implements OnInit {
  tableHeader = [];
  originalList = [];
  products = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(){
    this.dataService.getJSON('students').subscribe(data => {
          console.log(data);
          this.originalList = data.students;
          this.products = [...this.originalList];
          this.tableHeader = Object.keys(this.products[0]).map((element) => {
            return {
              header: element,
              clickCount: 0
            };
          });
      });
  }

  updateSort(field) {

    if (2 - field.clickCount){
      this.products = Utils.sort(this.products, field.header, field.clickCount);
      field.clickCount++;
    }
    else{
      field.clickCount = 0;
      this.products = [...this.originalList];
    }
  }

}
