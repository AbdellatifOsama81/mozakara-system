import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent {
  isLoading:boolean=false;
  email:any;
  updatePasswordError: string='';
  updatePasswordForm:any;
  
  constructor(private _formBuilder:FormBuilder , private _auth:AuthService, private _router:Router){
    this.updatePasswordForm = _formBuilder.group({
      email : ['',  [Validators.email]],
      newPassword : ['',  [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/)]],
      confirmPassword : ['',  [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/)]],
    })
  }

 
  updatePassword(form:FormGroup){
    this.updatePasswordForm.value.email  = this._auth.getEmail();
    this.isLoading =true;
    this._auth.updatePassword(this.updatePasswordForm.value).subscribe({
      next:(data:any) => { this.subscribedSuccessuly() },
      error:(err:any) => { this.updatePasswordError = err.error.message ; this.isLoading = false; }
    })
  }

  subscribedSuccessuly(){
   // this.isLoading =false;
    this._router.navigate(['/auth/login'])
  }

}
