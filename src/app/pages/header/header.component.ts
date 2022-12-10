import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user : string | null = localStorage.getItem('user');

  constructor(
    private router : Router
    ){

    }
    @Input() currentUser : string | null = localStorage.getItem('user');
    ngOnInit(){
      this.currentUser = localStorage.getItem('user');
    }
  navigateRegister(){
    this.router.navigateByUrl('/register');
  }
  navigateLogin(){
    this.router.navigateByUrl('/login');
  }
  logoutButton(){
    this.router.navigateByUrl('/login');
    localStorage.setItem('user', '');
    this.currentUser = localStorage.getItem('user');
  }
}
