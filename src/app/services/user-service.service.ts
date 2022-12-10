import { Injectable } from '@angular/core';
import User from '../models/user';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private webService : WebService) { }

  registerUser(user : User){
    return this.webService.post('register', user);
  }

  loginUser(user: User){
    return this.webService.post('login', user);
  }
}
