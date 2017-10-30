import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  movies = [];
  
    constructor(public navCtrl: NavController, public navParams: NavParams) {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=7d30f8985dbf498b3eb110b86dc6c962&language=en-US&page=1')
      .then(response => response.text())
      .then(data => {
        let parsedData = JSON.parse(data);
        if (parsedData['Response'] == "False") {
          this.movies = [];
          return;
        }
        this.movies = parsedData['results'];
  
        // for (let i = 0; i < this.movies.length; i++) {
        //   if (this.movies[i]['Poster'] == "N/A") {
        //     this.movies[i]['Poster'] = null;
        //   }
        // }
  
        console.log(this.movies);
      })
      .catch(err => console.log('An error occured!'))
    }
  
    moreInfo(e) {
      console.log(e.id);
      this.navCtrl.push(DetailsPage, {
        id: e.id,
      })
    }
  
  }
  