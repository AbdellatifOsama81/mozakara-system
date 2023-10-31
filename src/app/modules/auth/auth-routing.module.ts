import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { OtpComponent } from './otp/otp.component';
import { OtpToUpdatepasswordClassGuard } from 'src/app/shared/services/otp-to-updatepassword-class.guard';
import { DiactivateAuthGuard } from 'src/app/shared/services/diactivate-auth.guard';

const routes: Routes = 
[
  { path: '', component: AuthComponent ,
    children: [
      {
        path:'signup',
        component:SignUpComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'forget-password',
        component:ForgetPasswordComponent
      },
      {
        path:'update-password',
        canActivate:[OtpToUpdatepasswordClassGuard],  
        component:UpdatePasswordComponent
      },
      {
        path:'otp',
        component:OtpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
