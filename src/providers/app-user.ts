import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppUser provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppUser {

  constructor(public http: Http) {
    console.log('Hello AppUser Provider');
  }
  baseUrl: string ="http://sp-17-vincent-jbrownssf.c9users.io:8080/api/"
  path: string = "/AppUsers"
  
  register(newUserData) {
   return this.http.post(
     this.baseUrl + this.path,
     newUserData
   );
  }
  
  login(UserData) {
    return this.http.post(
      this.baseUrl + this.path + "/login",
      UserData
  );
  }
  
  logout(token) {
    return this.http.post(
      this.baseUrl + this.path + '/logout' + 
      '?access_token=' + token,
      {} //you have to pass an empty object becasue this is using the post
         //method and it is expecting two parameters of this function call  
      );
  }
  
}
