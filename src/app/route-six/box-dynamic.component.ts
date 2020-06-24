import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-box-dynamic',
  template: '<div class="card" (click)=buttonClicked(index)><h2>{{ index }} </h2></div>'
})
export class BoxDynamicComponent implements OnInit {
  index = 0;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  buttonClicked(index: number) {
    this.sharedService.boxAlert.emit(index);
  }

}
