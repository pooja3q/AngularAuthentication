import { Component, OnInit } from '@angular/core';
import { EventService}  from '../event.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router' 

@Component({
  selector: 'app-specialevent',
  templateUrl: './specialevent.component.html',
  styleUrls: ['./specialevent.component.css']
})
export class SpecialeventComponent implements OnInit {

private  events=[];
  constructor( private _auth:EventService, private _router :Router) { }

  ngOnInit() {

    this._auth.getSpecialEvent().subscribe(
      res=> this.events = res,
      err=>{
        if(err instanceof HttpErrorResponse){
          if(err.status == 401)
          {
                 this._router.navigate(['/login']);
          }
        }
      }
    )
  }

}
