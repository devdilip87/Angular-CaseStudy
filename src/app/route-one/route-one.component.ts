import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.css']
})
export class RouteOneComponent implements OnInit {
  data:{node: {}};

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(){
    this.dataService.getJSON("nestedData").subscribe(data => {
      this.data = data;
    });
  }


}
