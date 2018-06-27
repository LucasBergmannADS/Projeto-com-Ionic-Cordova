import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { ContactProvider } from '../providers/contact/contact';

@NgModule({
  declarations: [
    MyApp
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCw-RBB6IcgUZC1_oDIpBgib4uH8-i-Z8A",
      authDomain: "teste-5551.firebaseapp.com",
      databaseURL: "https://teste-5551.firebaseio.com",
      projectId: "teste-5551",
      storageBucket: "teste-5551.appspot.com",
      messagingSenderId: "552965354509"
    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
     ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider
  ]
})
export class AppModule {}