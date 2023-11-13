import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  verificationError: string='';
  code:string='';
  lastcomponent!:string;
  verificationForm! :any; 
  currentEmail!: string;
  isLoading: boolean = false;

  constructor(private formbuilder:FormBuilder,private _auth:AuthService, private _router:Router, private location:Location){
    this.verificationForm = formbuilder.group({
      code :['',  [Validators.required]],
    })
  }  
  
  ngOnInit(): void {
    this.lastcomponent = this._auth.getComponentName();
    this.currentEmail = this._auth.getEmail();
  }
  
  config ={
    length:6,
    inputStyles:{
      'border-bottom':'1px dotted red',
      'border-left':'1px dotted transparent',
      'border-right':'1px dotted transparent',
      'border-top':'1px dotted transparent',
      'color':'black',
      'width':'60px',
      'height':'50px',
      'background-color':'#FFF'
    }
  }

  
  onOtpChange(code:string){
    this.code = code
  }

  objOTPform={
    "email":this._auth.getEmail(),
    "code":this.code
  }

  Verify():void {
    this.isLoading = true;
    if(this.lastcomponent =='resetPassord')  this.resetPassword();
    else if(this.lastcomponent == 'activateAccount')  this.activateAccount();
   
  }

  activateAccount(){
    this._auth.activateAccount(this.objOTPform).subscribe(
      (next) => 
      { 
        this.isLoading = false;
        this._auth.remove('componentName')
        this._router.navigate(['/auth/login']) ;
      },
      (error) => { 
        this.verificationError = error.error.message;
        this.isLoading = false;;
       }
   );
  }

  resetPassword(){
    this._auth.ResetPassword(this.objOTPform).subscribe(
      (data:any) => { 
        this.isLoading = false;
        this._auth.remove('componentName');
         this._auth.setOTPResult(data.succeeded);
         this._router.navigate(['/auth/update-password']);
       },
      (error) => {
         this.verificationError = error.error.message; 
         this.isLoading = false;}
   );
  }
}
