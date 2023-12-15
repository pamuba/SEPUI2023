import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }
  ngOnInit(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#f1948A')
    this.renderer.addClass(this.element.nativeElement, 'container')
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'The tooltip')
  }

}
