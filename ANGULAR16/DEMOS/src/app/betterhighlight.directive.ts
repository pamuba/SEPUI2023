import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') background:string = 'gold'
  @HostBinding('style.border') border:string = 'none'

  @HostListener('mouseenter') mouseenter(){
    this.background = 'pink';
    this.border = 'black 2px solid'
  }

  @HostListener('mouseleave') mouseleave(){
    this.background = 'gold'
    this.border = ''
  }
}
