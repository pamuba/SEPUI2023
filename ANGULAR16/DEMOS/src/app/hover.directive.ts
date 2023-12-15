import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }
  
  @HostListener('mouseover') onmouseover(){
    this.renderer.setStyle(this.element.nativeElement, "margin", "30px 30px");
    this.renderer.setStyle(this.element.nativeElement, "padding", "5px 10px");
    this.renderer.setStyle(this.element.nativeElement, "transition", "0.5s");
  }

  @HostListener('mouseleave') onmouseout(){
    this.renderer.setStyle(this.element.nativeElement, "margin", "1px 1px");
    this.renderer.setStyle(this.element.nativeElement, "padding", ".5px .5px");
    this.renderer.setStyle(this.element.nativeElement, "transition", "0.5s");
  }
}
