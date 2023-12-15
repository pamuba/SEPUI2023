import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  ngOnInit(){
    console.log(this.paragraph1)
  }
  ngAfterContentInit(){
    this.paragraph1.nativeElement.textContent = "New Content"
    console.log(this.paragraph1.nativeElement.textContent)
  }

  @ContentChild('paragraph') paragraph1!: ElementRef
}
