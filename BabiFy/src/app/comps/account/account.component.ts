import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
  signupUsers: any[]=[];
  signupObj:any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj:any = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signupUsers = JSON.parse(localData);
    }
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: ''
    };
  }
  onLogin(){
    debugger
    const isUserExist = this.signupUsers.find(m => m.email == this.loginObj.email && m.password == this.loginObj.password);
    if(isUserExist != undefined) {
      alert('User Login Successfully!')
    }
    else {
      alert('Incorrect email or password. Please try again or sign up first.')
    }
  }
}
