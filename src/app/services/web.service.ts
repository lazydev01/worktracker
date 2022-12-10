import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebService {
  readonly HTTP_URL : string = "";
  constructor(
   private http : HttpClient,
   private router : Router
   ) {
   console.log(this.router.url);
    this.HTTP_URL = "http://localhost:3000";
   }
   get(uri : string){
      return this.http.get(`${this.HTTP_URL}/${uri}`);
   }
   post(uri : string, payload : Object){
      return this.http.post(`${this.HTTP_URL}/${uri}`, payload);
   }
   patch(uri : string, payload : Object){
      return this.http.patch(`${this.HTTP_URL}/${uri}`, payload);
   }
   delete(uri : string){
      return this.http.delete(`${this.HTTP_URL}/${uri}`);
   }
}
