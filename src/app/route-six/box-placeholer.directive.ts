import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBoxPlaceHolder]',
})
export class BoxPlaceHolderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
