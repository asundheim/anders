import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[blog-post]',
})
export class PostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}