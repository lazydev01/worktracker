import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'To-Do List';
  constructor(){

  }
  ngOnInit(){
    if(localStorage.getItem('user')===null){
      localStorage.setItem('user', "");
    }
  }  
}
