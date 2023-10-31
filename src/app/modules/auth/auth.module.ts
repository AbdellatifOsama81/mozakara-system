import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpComponent } from './otp/otp.component';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  declarations: [
    AuthComponent,
    SignUpComponent,
    LoginComponent,
    ForgetPasswordComponent,
    UpdatePasswordComponent,
    OtpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    NgOtpInputModule 
  ]
})
export class AuthModule { }
