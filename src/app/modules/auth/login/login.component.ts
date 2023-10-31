import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:any;
  errorForLogin:string=''

  constructor(private _formBuilder:FormBuilder , private _auth:AuthService, private _router:Router){
    this.loginForm = _formBuilder.group({
      email : ['',  [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/)]]
    })
  }

  LoginUser(form:FormGroup){
    if(this.loginForm.valid){
      this._auth.login(this.loginForm.value).subscribe({
        next:(data:any)=>{ this.nextsubscribedDataLogin(data) },
        error:(error:any)=>{ this.errorForLogin = error.error.message }
        });
      }   
  }

  nextsubscribedDataLogin(data:any){
    if(data.succeeded == true){
      localStorage.setItem("token",data.data)
      this._router.navigate(['/'])
    }
  }
  
  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

}

