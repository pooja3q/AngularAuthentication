import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  private events=[];
  constructor( private _auth :EventService) { }

  ngOnInit() {

    this._auth.getEvent().subscribe(
      res=> this.events= res,
      err=> console.log(err)
    )
  
  }

}
