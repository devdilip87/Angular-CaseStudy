import { Component, ViewChild, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { BoxPlaceHolderDirective } from './box-placeholer.directive';
import {BoxDynamicComponent} from './box-dynamic.component';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-route-six',
  templateUrl: './route-six.component.html',
  styleUrls: ['./route-six.component.css']
})
export class RouteSixComponent implements AfterViewInit {
  scrollCount = 0;
  @ViewChild(BoxPlaceHolderDirective, {static: true}) boxPlaceholder: BoxPlaceHolderDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private sharedService: SharedService) { }

  ngAfterViewInit(): void {
    this.loadComponent();
    this.sharedService.boxAlert.subscribe((index: number) => {
      alert('Div no ' + index + ' clicked!');
    });
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BoxDynamicComponent);
    const viewContainerRef = this.boxPlaceholder.viewContainerRef;

    for (let index = 1; index <= 12; index++) {
      const componentRef = viewContainerRef.createComponent(componentFactory);
      (componentRef.instance).index = (this.scrollCount * 10 + index);
    }
    this.scrollCount++;
  }

  onScroll(): void {
    this.loadComponent();
  }
}
