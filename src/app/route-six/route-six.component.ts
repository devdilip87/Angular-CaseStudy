import { Component, ViewChild, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { BoxPlaceholderDirective } from './box-placeholer.directive';
import {BoxDynamicComponent} from "./box-dynamic.component";
import { SharedService } from './shared.service';


@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.css']
})
export class RouteSixComponent implements OnInit {
  scrollCount = 0;
  @ViewChild(BoxPlaceholderDirective, {static: true}) boxPlaceholder: BoxPlaceholderDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private sharedService: SharedService) { }
  
  ngOnInit(): void {
    this.loadComponent();
    this.sharedService.boxAlert.subscribe((index) => {
      alert('Div no '+ index + ' clicked!');
    })
  }

  loadComponent() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(BoxDynamicComponent);
    let viewContainerRef = this.boxPlaceholder.viewContainerRef;

    for (let index = 1; index <= 12; index++) {
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance).index = (this.scrollCount * 10 + index)
    }
    this.scrollCount++;
  }

  onScroll(): void {
    this.loadComponent();
  }
}
