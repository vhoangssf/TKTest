import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionPage } from './question-page';

@NgModule({
  declarations: [
    QuestionPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionPage),
  ],
  exports: [
    QuestionPage
  ]
})
export class QuestionPageModule {}
