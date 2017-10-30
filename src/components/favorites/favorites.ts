import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the FavoritesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesComponent {

  favorites: any[];

  constructor(private event: Events, private storage: Storage) {
    storage.get('favorites').then((val) => {
      if (val != '' || val == null) {
          this.favorites = JSON.parse(val);
          console.log(this.favorites);
          this.event.publish('favorites', this.favorites);
      }
    });

    
  }

}
