import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[box-placeholder]',
})
export class BoxPlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
