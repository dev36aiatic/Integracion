import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  }
    );


  constructor(private authSvc: AuthService, private router: Router ) { }

  ngOnInit(): void {
      }
async onLogin(){

  const {email, password} = this.loginForm.value;
  try {
    console.log('Form->', this.loginForm.value);
    const user = await this.authSvc.onLogin(email,password);
    if(user){
      this.router.navigate(['/home']);
    }

  } catch (error) {
    console.log(error);
  }
}

async onGoogleLogin(){
  try {
    const user =await this.authSvc.onGoogleLogin();
    if(user){
      this.router.navigate(['/home']);
    }
  } catch (error) {
    console.log(error);
  }
}

async onFbLogin(){
  try{
    const user =await this.authSvc.onFbLogin();
    this.router.navigate(['/home']);

  }
  catch(error){console.log(error)}
}


}
