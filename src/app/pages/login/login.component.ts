import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder : FormBuilder, 
    private userService : UserServiceService,
    private router : Router
    ) {

  }
  userInString : string = "";
  currentUser : string | null = localStorage.getItem('user');
  ngOnInit(){

  }
  loginForm =  this.formBuilder.group({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  });

  loginSubmit(){
    this.userService.loginUser(this.loginForm.value as User).subscribe((user)=>{
      this.router.navigate(['../', 'users', (user as User)._id, 'lists']);
      console.log((user as User)._id);
      this.userInString = JSON.stringify(user);
      localStorage.setItem('user', this.userInString);
    },(err => {
      this.router.navigate(['../', 'login']);
      alert("Please enter Valid Credentials");
      this.loginForm.reset();
    }));
  }
}
