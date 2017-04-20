import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuestionPage } from '../question-page/question-page';
import { HistoryPage } from '../history-page/history-page';

/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lobby-page',
  templateUrl: 'lobby-page.html',
})
export class LobbyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }
  
  takeTest() {
    this.navCtrl.push(QuestionPage);  
  }
  
  myHistory() {
    this.navCtrl.push(HistoryPage);
  }

}
