import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OtpToUpdatepasswordClassGuard implements CanActivate {
  
  constructor(private _auth:AuthService,private _router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._auth.getOTPResult()==true && this._auth.getComponentName()=='resetPassord'){
      return true;
    }else{
      this._router.navigate(['/auth/login']);
      return false;
    }
     
  }
  
}
