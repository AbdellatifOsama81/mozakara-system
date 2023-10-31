import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:BehaviorSubject<any> =new BehaviorSubject(null);
  private _OTPResult!:boolean;

  getComponentName(): string {
    return localStorage.getItem('componentName') || '';
  }

  setComponentName(data: string): void {
    localStorage.setItem('componentName',data)
  }

  constructor(private _http:HttpClient,private _router:Router) { 
    if(this.getToken()){
       this.savedUser();
      }
       

  }

   savedUser(){
    let token = JSON.stringify(this.getToken());
    let decodedToken= jwtDecode(token);
    console.log(decodedToken);
    this.userData.next(decodedToken);
  } 

  signup(userData:any):Observable<any>{
    return this._http.post(`${environment.apiUrl}/register/signup`,userData);
  }

  login(userData:any):Observable<any>{
    return this._http.post(`${environment.apiUrl}/register/login`,userData);
  }
  activateAccount(verifyUserData:any):Observable<any>{
    return this._http.post(`${environment.apiUrl}/register/activate-account`,verifyUserData);
  }
  ResetPassword(verifyUserData:any):Observable<any>{
    return this._http.post(`${environment.apiUrl}/register/confirm-forget-password`,verifyUserData);
  }
  forgetPassword(email:string){
    return this._http.post(`${environment.apiUrl}/register/forget-password`,email)
  }
  updatePassword(password:string){
    return this._http.patch(`${environment.apiUrl}/register/update-password`,password)
  }
  getRoles():Observable<any>{
    return this._http.get<any>(`${environment.apiUrl}/register/get-roles`)
  }
  getCountryCodes():Observable<any>{
    return this._http.get<any>( `${environment.apiUrl}/country/all`)
  }


  getToken() {
    if (localStorage.getItem('token')) { return localStorage.getItem('token'); }
    else {  return null; }
  }

  getEmail():string {
     return localStorage.getItem("email") || '';
  }

  setOTPResult(result:any) :void {
    this._OTPResult = result;
  }
  getOTPResult():boolean{
    return this._OTPResult;
  }

}
