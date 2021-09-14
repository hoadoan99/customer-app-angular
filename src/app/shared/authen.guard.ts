import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from './authen.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate {
  constructor(private authenService: AuthenService, private route : Router){}

  canActivate()
   {
     if(this.authenService.isLoggedIn()){
        return true;
     }
     this.route.navigate(['login']);
    return false;
  }

}
