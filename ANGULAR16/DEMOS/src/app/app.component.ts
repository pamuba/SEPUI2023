import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { VwchildComponent } from './vwchild/vwchild.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'DEMOS';

  @ViewChild('dobinput') dateOfBirth!: ElementRef;
  @ViewChild('ageinput') age!: ElementRef;
  @ViewChild(VwchildComponent, {static:true}) vwcomp!: VwchildComponent;

  ngOnInit(){
  }
  constructor(){
    //this.age.nativeElement.focus();
  }
  calculateAge(){
    //console.log(this.dateOfBirth)
    //console.log(this.age)
    let dob = new Date(this.dateOfBirth.nativeElement.value).getFullYear();
    let age = new Date().getFullYear() - dob;
    this.age.nativeElement.value = age;
  }
}
