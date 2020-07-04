import { ContatoService } from './contato.service';
import { environment } from './../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule  } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { NavController } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    StatusBar,
    ContatoService,
    SplashScreen,
    AngularFireDatabase,
    ,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
