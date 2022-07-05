import { Component, Input, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatLabel } from '@angular/material/form-field';
import { LoginServiceService } from 'src/app/Services/login-service.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  @Input() useremail ="";
  @Input() password = "";
  loginstatus= false;

  hide = true;
  submitted = false;
  constructor() { }

  onSubmit(){
    this.submitted = true;
    this.loginstatus= LoginServiceService.login(this.useremail,this.password);

  }
  ngOnInit(): void {
  }

}
