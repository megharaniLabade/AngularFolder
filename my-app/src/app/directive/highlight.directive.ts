import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor() { }
  @HostBinding("style.backgroundColor")
  bgcolor="red"

  @HostListener("mouseenter")
  changefontSize(){
    console.log("Mouse entered")
  }

  @HostListener("mouseleave")
  resetFontSize(){
    console.log("Mouse Leaving")
  }

}
