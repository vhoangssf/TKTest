import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppUser } from '../../providers/app-user';
import { LobbyPage } from '../lobby-page/lobby-page';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {
  user: any = {}
  loginForm(form){
    if(form.invalid) {
      return alert("Please fill in all of the required fields.");
    }
    
    this.appUser.register(this.user)
    .map(res => res.json())
   .subscribe(res => {
     // handle successful responses and decide what happens next
     window.localStorage.setItem('token', res.id);
     window.localStorage.setItem('userId', res.userId);  
     this.navCtrl.setRoot(LobbyPage);
   }, error => {
     // inform the user of any known problems that arose, otherwise give a generic
     // failed message
      if (error.status === 404) {
        return alert("404: Not Found.");
      } else if (error.status === 422) {
        return alert("422: Email is already taken."); 
      } else if (error.status === 500) {
        return alert("500: The world has ended, or the server just isn't online");
     }
   });
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public appUser: AppUser  
  ) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
