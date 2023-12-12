import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css', '../comp1/comp1.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class Comp2Component {

}
