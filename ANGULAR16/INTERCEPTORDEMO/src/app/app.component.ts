import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'INTERCEPTORDEMO';

  employees:any[];

  constructor(private http: HttpClient){
    this.employees = [
      {code:'emp111', name:'John'},
      {code:'emp222', name:'Jill'}
     ]
  }

  getEmployees():void{
    this.employees = [
      {code:'emp111', name:'John'},
      {code:'emp222', name:'Jill'},
      {code:'emp333', name:'Jimmy'}
    ]
  }

  trackByCode(index:number, employee:any):string{
    return employee.code;
  }

   
  // ngOnInit(){
  //   //3 http requests
  //   this.http.get('https://jsonplaceholder.typicode.com/userszzzz')
  //     .subscribe(data=>{

  //   })
  //   this.http.get('https://jsonplaceholder.typicode.com/posts/2')
  //     .subscribe(data=>{

  //   })
  //   this.http.get('https://jsonplaceholder.typicode.com/posts/2/comments')
  //     .subscribe(data=>{

  //   })
  // }
}
