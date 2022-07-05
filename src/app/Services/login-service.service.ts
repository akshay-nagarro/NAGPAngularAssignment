import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserList } from '../Data/Classes/UserList';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  static isVaildUser: boolean = false;

  public static login(email: string, passowrd:string): boolean {
    UserList.userList.forEach(element => {
      if(element.email==email && element.password== passowrd)
      {
        this.isVaildUser=true;        
      }  
    });
    
    return this.isVaildUser;
}

  constructor() { }
}
