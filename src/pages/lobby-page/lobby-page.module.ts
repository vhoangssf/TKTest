import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LobbyPage } from './lobby-page';
//import { QuestionPage } from '../pages/question-page/question-page';

@NgModule({
  declarations: [
    LobbyPage,
  ],
  imports: [
    IonicPageModule.forChild(LobbyPage),
  ],
  exports: [
    LobbyPage
  ]
})
export class LobbyPageModule {}
