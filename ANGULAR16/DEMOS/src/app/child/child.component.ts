import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input('parentData') data:any
  @Output() childEvent = new EventEmitter()

  fireEvent(txt:any){
    this.childEvent.emit(txt)
  }
}
