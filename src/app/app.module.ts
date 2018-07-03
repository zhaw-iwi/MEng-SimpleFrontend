import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TaskProvider } from '../providers/task/task';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginProvider } from '../providers/login/login';
import { InboxPageModule } from '../pages/inbox/inbox.module';
import { ProjectsPageModule } from '../pages/projects/projects.module';
import { JWTInterceptor } from '../security/jwtInterceptor';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    InboxPageModule,
    ProjectsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskProvider,
    LoginProvider,
    {provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi : true}
  ]
})
export class AppModule {}
