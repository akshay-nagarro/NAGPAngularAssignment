import { Component, Input, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  @Input() useremail ="";
  @Input() password = "";

  hide = true;
  submitted = false;
  constructor() { }

  onSubmit(){
    this.submitted = true;
  }
  ngOnInit(): void {
  }

}
