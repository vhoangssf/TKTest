import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { LandingPage } from './landing-page';
import { LoginPage } from '../login-page/login-page';
import { RegisterPage } from '../register-page/register-page';
/**
 * Generated class for the LandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-landing-page',
  templateUrl: 'landing-page.html',
})
export class LandingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  goToLoginPage() {
      this.navCtrl.push(LoginPage);
    }
  goToRegisterPage() {
      this.navCtrl.push(RegisterPage);
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

}
