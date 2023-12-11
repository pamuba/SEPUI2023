import { Component } from '@angular/core';

@Component({
  selector: 'propbinding',
  template: `
    <h2>
      Property Binding
    </h2>
    <input id="{{myId}}" type="text" value="Angular16"/>
    <input [id]="myId" [disabled] = "isDisabled" type="text" value="Angular16"/>
    
  `,
  styles: [`

  `]
})
export class PropbindingComponent {
    myId = "txtBox"
    isDisabled = false
}    
