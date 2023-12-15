import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[setBackground]'
})
export class SetBackgroundDirective{
   
    constructor(private element:ElementRef){
        this.element = element
    }
    ngOnInit(){
        this.element.nativeElement.style.background = '#c8e6c9'
    }
}