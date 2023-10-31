import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  errorForgetPassword:string=''
  isLoading:boolean=false;
  forgetPasswordForm:any;


  constructor(private _formBuilder:FormBuilder , private _auth:AuthService, private _router:Router){
    this.forgetPasswordForm = _formBuilder.group({
      email : ['',  [Validators.required, Validators.email]],
    })
  }

  ResetPassword(form:FormGroup){
   //this.isLoading =true;
    if(this.forgetPasswordForm.valid){
      this._auth.forgetPassword(this.forgetPasswordForm.value).subscribe({
        next:(data:any) => { this.nextSubscribedData(data); },
        error:(error:any)=>{ this.errorForgetPassword = error.error.message; }
      });
    }
  }

  nextSubscribedData(data:any){
    localStorage.setItem("email",this.forgetPasswordForm.value.email)
    this.isLoading =false;
    this._router.navigate(['/auth/otp'])
  }


  emitValue() {
    const value = 'resetPassord';
    this._auth.setComponentName(value);
  }



  get email(){
    return this.forgetPasswordForm.get('email')
  }
}
