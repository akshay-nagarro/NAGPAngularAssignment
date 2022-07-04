import { Component, Input, OnInit } from '@angular/core';
import { Iuser } from 'src/app/Data/Interfaces/Iuser';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {

  hide=true;
  submitted= false;
  @Input() user: Iuser = {
    userid:1,
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    isPrimeUser:false,
    watched:"",
    watchLater:"",
    favourites:"",
    isAdmin:false
  };
  onSubmit(){
    this.submitted = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
