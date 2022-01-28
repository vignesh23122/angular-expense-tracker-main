import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.minLength(5),Validators.maxLength(256)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(256)]),
    firstName: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(200)]),
    lastName: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(200)]),
  });

  usernameIsAvailable:boolean = false;

  showAlert:boolean = false;
  alertIsSuccess:boolean = true;
  alertMessage: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.unprotectedRouting();
  }

  checkUsername(username:string){
    if(username.length>=5){
      this.userService.usernameAvailabilityRequest(username).subscribe((res:any)=>{
        this.usernameIsAvailable = res.success;
      });
    }
    this.usernameIsAvailable = false;
  }

  onSubmit(){
    this.showAlert = false;
    if(this.signUpForm.valid){
      const signup:any = this.signUpForm.value;
      this.userService.signUpRequest(signup.username,signup.email,signup.password,signup.firstName,signup.lastName).subscribe((res:any)=>{
        this.alertMessage = 'SignUp Successful !!';
        this.alertIsSuccess = true;
        this.showAlert=true;
      });
    }
  }

  get username(){return this.signUpForm.get('username');}

  get email(){return this.signUpForm.get('email')}

  get password(){return this.signUpForm.get('password')}

  get fname(){return this.signUpForm.get('firstName')}

  get lname(){return this.signUpForm.get('lastName')}

}
