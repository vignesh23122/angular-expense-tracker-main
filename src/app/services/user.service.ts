import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Expense } from '../models/expense.model';
import { AppConstants } from '../util/AppConstants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:string = '';
  isLoggedIn:boolean = false;

  constructor(private http:HttpClient,private router: Router) {
    this.initializeAuthInfo();
  }

  private handleError(error: any) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      alert('An error occurred: '+error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if(error.error.hasOwnProperty('message')){
        alert(error.error.message);
      }
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError('An error occured');
  }

  initializeAuthInfo(){
    this.token = localStorage.getItem('token') || '';
    this.isLoggedIn = (localStorage.getItem('is_loggedin')==='true')?true:false;
  }

  setAuthInfo(token: string,isLoggedIn: boolean){
      localStorage.setItem('token',token);
      localStorage.setItem('is_loggedin',(isLoggedIn)?'true':'false');
      this.initializeAuthInfo();
  
  }

  getIsLoggedIn(){
    return this.isLoggedIn;
  }

  getToken(){
    return this.token;
  }

  unprotectedRouting(){
    if(this.isLoggedIn){
      this.router.navigate(['/expense/all']);
    }
  }

  protectedRouting(){
    if(!this.isLoggedIn){
      this.router.navigate(['/login']);
    }
  }

  logOutUser(){
    localStorage.setItem('token','');
    localStorage.setItem('is_loggedin','false');

    this.isLoggedIn = false;
    this.token='';
    }


  usernameAvailabilityRequest(username: string){
    return this.http.get(AppConstants.ENDPOINT+"/user/username/"+username+"/available").pipe(catchError(this.handleError));
  }

  loginRequest(username: string, password: string){
    return this.http.post(AppConstants.ENDPOINT+"/user/login",{username:username,password:password}).pipe(catchError(this.handleError));
  }

  signUpRequest(username: string,email: string,password: string,firstName: string,lastName: string){
    return this.http.post(AppConstants.ENDPOINT+'/user/signup',
    {
      username:username,
      email:email,
      password:password,
      firstName:firstName,
      lastName:lastName
    }).pipe(catchError(this.handleError));
  }

  fetchBalance(){
    return this.http.get(AppConstants.ENDPOINT+'/user/balance',{headers:{Authorization:'Bearer '+AppConstants.getToken()}}).pipe(catchError(this.handleError));
  }

  updateBalance(amount: number){
    return this.http.patch(AppConstants.ENDPOINT+'/user/balance/add',{amount:amount},{headers:{'Authorization':'Bearer '+AppConstants.getToken(),'Access-Control-Allow-Origin':'*'}}).pipe(catchError(this.handleError));
  }

  addExpense(expense: Expense){
    return this.http.post<Expense>(AppConstants.ENDPOINT+'/user/expense',expense,{headers:{'Authorization':'Bearer '+AppConstants.getToken(),'Access-Control-Allow-Origin':'*'}}).pipe(catchError(this.handleError));
  }

  deleteExpense(expense: Expense){
    return this.http.delete(AppConstants.ENDPOINT+'/user/expense/'+expense.id,{headers:{Authorization:'Bearer '+AppConstants.getToken()}}).pipe(catchError(this.handleError));
  }

  fetchAllExpenses(){
    return this.http.get<Expense[]>(AppConstants.ENDPOINT+'/user/expense/all',{headers:{Authorization:'Bearer '+AppConstants.getToken()}}).pipe(catchError(this.handleError));
  }

}
