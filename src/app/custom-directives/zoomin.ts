import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomin]',
})
export class Zoomin {
  // ele is object of ElementRef Class
  constructor(private ele: ElementRef) { // Dependency Injection
    console.log(ele);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.transform = 'scale(100%,110%)'
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.transform = 'scale(100%)'
  }
}
