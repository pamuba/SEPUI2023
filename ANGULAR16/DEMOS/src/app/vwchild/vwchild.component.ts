import { Component } from '@angular/core';

@Component({
  selector: 'app-vwchild',
  templateUrl: './vwchild.component.html',
  styleUrls: ['./vwchild.component.css']
})
export class VwchildComponent {
  sayHello(){
    console.log("Hello from vwChild Component class");
  }
}
