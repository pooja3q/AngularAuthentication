import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl ="http://localhost:3000/api/";
  
  constructor( private _http :HttpClient) { }


  registerUser(user){

    console.log("data from registerUser service= ",user)

    let val = this._http.post<any>(this._baseUrl+"register",user);
    console.log("val== ", val)
    return val 
    
  }

  loginUser(user){
     
     return this._http.post<any>(this._baseUrl+"login",user);

  }

 loggedIn(){

    return !!localStorage.getItem('token');
 }



}
