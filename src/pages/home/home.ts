import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies = [];
  noResults: boolean;

  constructor(public navCtrl: NavController, private keyboard: Keyboard) {
    this.keyboard.hideKeyboardAccessoryBar(false);
  }


  search(e) {

    var val = e.target.value;

    if(val != null && val != ''){
      console.log(val);

      fetch('https://api.themoviedb.org/3/search/movie?api_key=7d30f8985dbf498b3eb110b86dc6c962&page=1&include_adult=false&query='+encodeURI(val))
        .then(response => response.text())
        .then(data => {
          let parsedData = JSON.parse(data);
          if (parsedData['Response'] == "False") {
            this.movies = [];
            this.noResults = true;
            return;
          }
          this.noResults = false;
          this.movies = parsedData['results'];

          // for (let i = 0; i < this.movies.length; i++) {
          //   if (this.movies[i]['Poster'] == "N/A") {
          //     this.movies[i]['Poster'] = null;
          //   }
          // }

          console.log(this.movies);
        })
        .catch(err => console.log('An error occured!'))
    } else {
      this.noResults = false;
      this.movies = [];
    }
  }


  moreInfo(e) {
    console.log(e.id);
    this.navCtrl.push(DetailsPage, {
      id: e.id,
    })
  }

  enterKey() {
    console.log('Enter hit');
  }

}
