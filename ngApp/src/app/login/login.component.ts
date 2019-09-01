import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  constructor( private _auth :AuthService, private _router :Router ) { }

  ngOnInit() {
  }

  loginUser(){

    console.log("login user data ", this.loginUserData);

    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
           console.log("login response = ",res);
           this._router.navigate(['/member']);
      },
      err => console.log("login error =" ,err)
    )
  }
}
