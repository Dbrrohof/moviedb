import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
import { Events } from "ionic-angular";

@Injectable()
export class LoadFavoritesService {
    favorites: any[];

    constructor(private event: Events, public storage: Storage) {
        storage.get('favorites').then((val) => {
            if (val != '' || val == null) {
                this.favorites = JSON.parse(val);
                this.event.publish('favorites', this.favorites);
            }
        });

        
    }

}