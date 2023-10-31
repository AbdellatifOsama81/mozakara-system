import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit{

  isLoading:boolean=false;
  errorForSignUp:string=''
  roles:any=[]
  countryCodes :any=[]
  password: string='';
  confirmPassword:string=''
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  signUpForm:any;

  constructor(private formBuilder:FormBuilder, private _auth:AuthService,private _router:Router){
    this.signUpForm = formBuilder.group({
      firstName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      secondName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      familyName : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email :['',  [Validators.required, Validators.email]],
      phoneNumber : ['', [Validators.required,  Validators.pattern(/^\d{10}$/)]],
      gender :['', [Validators.required , Validators.maxLength(6)]],
      role : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password : ['',  [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/)]],
      confirmPassword : ['', [Validators.required,  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/)]],
      countryCode : ['', [Validators.required]],
      })
  }
  
  ngOnInit(): void {
    this.getCountries()
    this.getRoles()
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  
  getRoles(){
    this._auth.getRoles().subscribe(
      (roles) =>{ this.roles = roles },
      (error)=>{ this.errorForSignUp = error }
    )
  }

  getCountries(){
    this._auth.getCountryCodes().subscribe(
      (countries) =>{ this.countryCodes = countries.data },
      (error)=>{ this.errorForSignUp = error }
    ) 
  }

   
  userRegister(form:FormGroup){
    this.isLoading =true;
    if(this.signUpForm.valid){
       this._auth.signup(this.signUpForm.value).subscribe({
        next:(data:any) => { this.navigateToOTP() },
        error:(error:any) => { this.takeError(error) }
      }); 
    } 
  }

  navigateToOTP(){
    localStorage.setItem("email",this.signUpForm.value.email)
           this._router.navigate(['/auth/otp']) 
  }

  takeError(error:any){
    this.isLoading =false;
    this.errorForSignUp = error?.error.message
  }

  emitValue() {
    const value = 'activateAccount';
    this._auth.setComponentName(value);
  }



  get firstName(){
    return this.signUpForm.get('firstName')
  }
  get secondName(){
    return this.signUpForm.get('secondName')
  }
  get familyName(){
    return this.signUpForm.get('familyName')
  }
  get email(){
    return this.signUpForm.get('email')
  }
  get phoneNumber(){
    return this.signUpForm.get('phoneNumber')
  }
  get gender(){
    return this.signUpForm.get('gender')
  }
  get role(){
    return this.signUpForm.get('role')
  }
  get passWord(){
    return this.signUpForm.get('password')
  }
  get confirmPassWord(){
    return this.signUpForm.get('confirmPassword')
  }
  get countryCode(){
    return this.signUpForm.get('countryCode')
  }

}
