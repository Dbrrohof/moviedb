import { Component } from '@angular/core';
import { NavController, NavParams, Events, ToastController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Observable';
import { FavoritesComponent } from '../../components/favorites/favorites'
import { DetailsPage } from "../details/details";


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  movies: any[];

  constructor(private toast: ToastController , private event: Events,public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    
  }

  ngOnInit() {
    this.event.subscribe('favorites', (data) => {
      console.log(data);
      this.movies = data;
    });
  }

  ngOnDestroy() {
    this.event.unsubscribe('favorites');
  }

  moreInfo(e) {
    this.navCtrl.push(DetailsPage, {
      id: e.id,
    })
  } 
  
  watched(movie) {
    let index = this.movies.indexOf(movie);
    
    if(index > -1){
      this.movies.splice(index, 1);
    }
    let stringify = JSON.stringify(this.movies);
    this.storage.set('favorites', ''+stringify+'');
    const toast = this.toast.create({
      message: 'Movie was removed from Watch List',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }


}
