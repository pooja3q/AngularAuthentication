import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _baseUrl ="http://localhost:3000/api/";

  constructor(private _http:HttpClient) { }


  getEvent(){

    return this._http.get<any>(this._baseUrl+"events")
   }
  
   getSpecialEvent(){
  
    return this._http.get<any>(this._baseUrl+"specialevents")
   }

}
