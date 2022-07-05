import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MoviesAndShowsList } from 'src/app/Data/Classes/MoviesAndShowsList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isuserloggedin= false;

  signout(): void {
    localStorage.setItem("isUserLoggedIn","false");
    this.ngOnInit();
  }

  constructor() {

   }

  ngOnInit(): void {
    this.isuserloggedin = (localStorage.getItem("isUserLoggedIn"))=="true"?true:false;
  }

}
