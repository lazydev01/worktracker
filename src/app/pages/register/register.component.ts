import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService : UserServiceService,
    private router : Router
    ){

  }
  registerForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    email : new FormControl('', Validators.email),
    password : new FormControl('', Validators.required)
  })
  userId : string  = (this.registerForm.value as User)._id as string;
  user : string = localStorage.getItem('user') as string;
  userIdCookie! : string;

  ngOnInit(){
    if(this.user !==""){
      this.userIdCookie = JSON.parse(this.user)._id;
      this.router.navigate(['../', 'users', this.userIdCookie, 'lists']);
    }
  }

  registerSubmit(){
    this.userService.registerUser(this.registerForm.value as User).subscribe(()=>{
      this.router.navigate(['../', 'users', (this.registerForm.value as User)._id, 'lists']);
      localStorage.setItem('user', this.userId);
    });
  }
}
