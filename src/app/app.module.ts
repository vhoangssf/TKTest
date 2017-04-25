import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LobbyPage } from '../pages/lobby-page/lobby-page';
import { QuestionPage } from '../pages/question-page/question-page';
import { HistoryPage } from '../pages/history-page/history-page';
import { ResultsPage } from '../pages/results-page/results-page';
import { LandingPage } from '../pages/landing-page/landing-page';
import { RegisterPage } from '../pages/register-page/register-page';
import { LoginPage } from '../pages/login-page/login-page';
import { MyApp } from './app.component';
import { AppUser } from '../providers/app-user';
import { Questions } from '../providers/questions';
import { TestResults } from '../providers/test-results';


let injections: any[] = [
    MyApp,
    LobbyPage,
    QuestionPage,
    HistoryPage,
    ResultsPage,
    LandingPage,
    RegisterPage,
    LoginPage
  ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppUser,
    Questions,
    TestResults
  ]
})
export class AppModule {}
