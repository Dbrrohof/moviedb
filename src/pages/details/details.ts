import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';  
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  public id;
  movie = [];
  releaseYear = 0;
  trailer = [];
  favorites = [];
  existInArray: boolean = true;

  constructor(private toast: ToastController, public event: Events, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.id = navParams.get("id");
  }

  ngOnInit() {
    this.event.subscribe('favorites', (data) => {
      console.log(data);
      this.favorites = data;

    });
  }

  ngOnDestroy() {
    this.event.unsubscribe('favorites');
  }

  ionViewDidLoad() {
    fetch('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=7d30f8985dbf498b3eb110b86dc6c962&language=da-DK')
    .then(response => response.text())
    .then(data => {
      this.movie = JSON.parse(data);
      this.releaseYear = this.movie['release_date'].substring(0,4);

    })
    .catch(err => console.log('An error occured!'))

    fetch('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=7d30f8985dbf498b3eb110b86dc6c962&append_to_response=videos,images')
      .then(response => response.text())
      .then(data => {
        let trailer = JSON.parse(data);
        this.trailer = trailer['videos']['results'][0];
      })
  }

  getLink() {
    let fullLink = 'https://www.youtube.com/embed/'+this.trailer['key'];
    return fullLink;
  }

  public pushItem(item) {
    this.favorites.push(item);
    let stringify = JSON.stringify(this.favorites);
    this.storage.set('favorites', ''+stringify+'');
    console.log(this.favorites);

    const toast = this.toast.create({
      message: 'Movie was added to Watch List',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
