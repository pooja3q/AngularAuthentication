import { Component, OnInit } from '@angular/core';
import { EventService}  from '../event.service'

@Component({
  selector: 'app-specialevent',
  templateUrl: './specialevent.component.html',
  styleUrls: ['./specialevent.component.css']
})
export class SpecialeventComponent implements OnInit {

private  events=[];
  constructor( private _auth:EventService) { }

  ngOnInit() {

    this._auth.getSpecialEvent().subscribe(
      res=> this.events = res,
      err=> console.log(err)
    )
  }

}
