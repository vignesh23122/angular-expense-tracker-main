import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginPageForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8)])
  });

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.unprotectedRouting();
  }

  onSubmit(){
    if(this.loginPageForm.valid){
      this.userService.loginRequest(this.loginPageForm.value.username,this.loginPageForm.value.password).subscribe((res: any)=>{
        this.userService.setAuthInfo(res.jwt,true);
        alert('Login Successfull !!!');
        window.location.replace("/expense/all");
      });
    }
  }

  get username(){return this.loginPageForm.get('username');}
  get password(){return this.loginPageForm.get('password');}

}
