import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(private _authService:AuthService, private _router:Router){}
  //localhost:4200/special
  canActivate():boolean{
    if(this._authService.loggedIn()){
      return true;
    }
    else{
      this._router.navigate(['/login'])
      return false
    }
  }
  
}
