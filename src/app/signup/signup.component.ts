import { Component,OnInit} from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn,FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Route, Router } from '@angular/router';

export function passwordValidator(): ValidatorFn{
  return (control: AbstractControl):ValidationErrors | null =>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if(password && confirmPassword && password! == confirmPassword)
  return{
    passwordsDontMatch:true
  }
  return null;
  }
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  },
  {validators: passwordValidator})

  constructor(private authService:AuthenticationService, private toast: HotToastService, private route:Router){}
ngOnInit():void{}

get name(){
  return this.signUpForm.get('name');
}

get email(){
  return this.signUpForm.get('email');
}

get password(){
  return this.signUpForm.get('password');
}

get confirmPassword(){
  return this.signUpForm.get('confirmPassword');
}

submit(){
  if (!this.signUpForm.valid) return;
  const {name,email,password } = this.signUpForm.value;
  this.authService.signUp(name,email,password).pipe(
    this.toast.observe({
      success:'Youre in',
      loading:'Not yet',
      error: ({message})=>`${message}`
    })
  ).subscribe(() =>{
    this.route.navigate(['/login'])
  })
}

}

