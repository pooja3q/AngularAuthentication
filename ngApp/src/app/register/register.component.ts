import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData ={}
  constructor( private _auth:AuthService, private _router :Router) { }

  ngOnInit() {
  }

  registeredUser(){
      
    console.log(" register form data " , this.registerUserData)

    this._auth.registerUser(this.registerUserData).subscribe(
      res=>{
        console.log("response ", res);
        this._router.navigate(['/member']);
      },
      err => console.log("err = ", err)
    )
    
  }

}
