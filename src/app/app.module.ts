import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailsPage } from '../pages/details/details';
import { NowplayingPage } from '../pages/nowplaying/nowplaying';
import { PopularPage } from '../pages/popular/popular';
import { YoutubePipe } from "../pipes/youtube/youtube";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { IonicStorageModule } from '@ionic/storage';
import { LoadFavoritesService } from "./loadFavorites.service";

import { FavoritesComponent } from '../components/favorites/favorites';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    NowplayingPage,
    PopularPage,
    YoutubePipe,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailsPage,
    NowplayingPage,
    PopularPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    LoadFavoritesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
