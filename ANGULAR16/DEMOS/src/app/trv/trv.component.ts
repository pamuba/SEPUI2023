import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'trv',
  templateUrl: './trv.component.html',
  styleUrls: ['./trv.component.css']
})
export class TrvComponent {
  constructor() {
  }

  ngOnInit(){
    //ElementRef 
  }
  handler(val:any){
    console.log(val)
    //val.focus()
  }
}
