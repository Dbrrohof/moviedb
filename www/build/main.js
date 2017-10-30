webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NowplayingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NowplayingPage = (function () {
    function NowplayingPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movies = [];
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=7d30f8985dbf498b3eb110b86dc6c962&language=en-US&page=1')
            .then(function (response) { return response.text(); })
            .then(function (data) {
            var parsedData = JSON.parse(data);
            if (parsedData['Response'] == "False") {
                _this.movies = [];
                return;
            }
            _this.movies = parsedData['results'];
            // for (let i = 0; i < this.movies.length; i++) {
            //   if (this.movies[i]['Poster'] == "N/A") {
            //     this.movies[i]['Poster'] = null;
            //   }
            // }
            console.log(_this.movies);
        })
            .catch(function (err) { return console.log('An error occured!'); });
    }
    NowplayingPage.prototype.moreInfo = function (e) {
        console.log(e.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], {
            id: e.id,
        });
    };
    return NowplayingPage;
}());
NowplayingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-nowplaying',template:/*ion-inline-start:"C:\Users\dbrro\Projects\movies\src\pages\nowplaying\nowplaying.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Now Playing</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines class="results">\n    <button ion-item *ngFor="let movie of movies" (click)="moreInfo(movie)">\n      <ion-thumbnail item-start>\n        <img src="http://image.tmdb.org/t/p/w185{{movie.poster_path}}" *ngIf="movie.poster_path">\n        <img src="../../assets/img/no-cover.jpg" *ngIf="!movie.poster_path">\n      </ion-thumbnail>\n      <h2 *ngIf="movie.original_title">{{ movie.original_title }}</h2>\n      <p><span id="type">Movie</span> • {{movie.release_date}}</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\dbrro\Projects\movies\src\pages\nowplaying\nowplaying.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], NowplayingPage);

//# sourceMappingURL=nowplaying.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopularPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details_details__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopularPage = (function () {
    function PopularPage(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movies = [];
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7d30f8985dbf498b3eb110b86dc6c962&language=en-US&page=1')
            .then(function (response) { return response.text(); })
            .then(function (data) {
            var parsedData = JSON.parse(data);
            if (parsedData['Response'] == "False") {
                _this.movies = [];
                return;
            }
            _this.movies = parsedData['results'];
            // for (let i = 0; i < this.movies.length; i++) {
            //   if (this.movies[i]['Poster'] == "N/A") {
            //     this.movies[i]['Poster'] = null;
            //   }
            // }
            console.log(_this.movies);
        })
            .catch(function (err) { return console.log('An error occured!'); });
    }
    PopularPage.prototype.moreInfo = function (e) {
        console.log(e.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__details_details__["a" /* DetailsPage */], {
            id: e.id,
        });
    };
    return PopularPage;
}());
PopularPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-popular',template:/*ion-inline-start:"C:\Users\dbrro\Projects\movies\src\pages\popular\popular.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Popular Movies</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines class="results">\n    <button ion-item *ngFor="let movie of movies" (click)="moreInfo(movie)">\n      <ion-thumbnail item-start>\n        <img src="http://image.tmdb.org/t/p/w185{{movie.poster_path}}" *ngIf="movie.poster_path">\n        <img src="../../assets/img/no-cover.jpg" *ngIf="!movie.poster_path">\n      </ion-thumbnail>\n      <h2 *ngIf="movie.original_title">{{ movie.original_title }}</h2>\n      <p><span id="type">Movie</span> • {{movie.release_date}}</p>\n      <div class="item-note" item-end>\n        <ion-icon name="star" color="danger"></ion-icon>{{movie.vote_average}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\dbrro\Projects\movies\src\pages\popular\popular.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], PopularPage);

//# sourceMappingURL=popular.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details/details.module": [
		274,
		2
	],
	"../pages/nowplaying/nowplaying.module": [
		275,
		1
	],
	"../pages/popular/popular.module": [
		276,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, keyboard) {
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.movies = [];
        this.keyboard.hideKeyboardAccessoryBar(false);
    }
    HomePage.prototype.search = function (e) {
        var _this = this;
        var val = e.target.value;
        if (val != null && val != '') {
            console.log(val);
            fetch('https://api.themoviedb.org/3/search/movie?api_key=7d30f8985dbf498b3eb110b86dc6c962&page=1&include_adult=false&query=' + encodeURI(val))
                .then(function (response) { return response.text(); })
                .then(function (data) {
                var parsedData = JSON.parse(data);
                if (parsedData['Response'] == "False") {
                    _this.movies = [];
                    _this.noResults = true;
                    return;
                }
                _this.noResults = false;
                _this.movies = parsedData['results'];
                // for (let i = 0; i < this.movies.length; i++) {
                //   if (this.movies[i]['Poster'] == "N/A") {
                //     this.movies[i]['Poster'] = null;
                //   }
                // }
                console.log(_this.movies);
            })
                .catch(function (err) { return console.log('An error occured!'); });
        }
        else {
            this.noResults = false;
            this.movies = [];
        }
    };
    HomePage.prototype.moreInfo = function (e) {
        console.log(e.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], {
            id: e.id,
        });
    };
    HomePage.prototype.enterKey = function () {
        console.log('Enter hit');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\dbrro\Projects\movies\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="search($event)" (keyup.enter)="enterKey()" [showCancelButton]="shouldShowCancel" placeholder="Søg efter film" animated="true"></ion-searchbar>\n\n  <div *ngIf="noResults" class="noResults">\n    <ion-icon name="close"></ion-icon>\n    <h1>No results</h1>\n  </div>\n\n  <ion-list no-lines class="results">\n    <button ion-item *ngFor="let movie of movies" (click)="moreInfo(movie)">\n      <ion-thumbnail item-start>\n        <img src="http://image.tmdb.org/t/p/w185{{movie.poster_path}}" *ngIf="movie.poster_path">\n        <img src="../../assets/img/no-cover.jpg" *ngIf="!movie.poster_path">\n      </ion-thumbnail>\n      <h2 *ngIf="movie.original_title">{{ movie.original_title }}</h2>\n      <p><span id="type">Movie</span> • {{movie.release_date}}</p>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\dbrro\Projects\movies\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_keyboard__["a" /* Keyboard */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = (function () {
    function ListPage(toast, event, navCtrl, navParams, storage) {
        this.toast = toast;
        this.event = event;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.event.subscribe('favorites', function (data) {
            console.log(data);
            _this.movies = data;
        });
    };
    ListPage.prototype.ngOnDestroy = function () {
        this.event.unsubscribe('favorites');
    };
    ListPage.prototype.moreInfo = function (e) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], {
            id: e.id,
        });
    };
    ListPage.prototype.watched = function (movie) {
        var index = this.movies.indexOf(movie);
        if (index > -1) {
            this.movies.splice(index, 1);
        }
        var stringify = JSON.stringify(this.movies);
        this.storage.set('favorites', '' + stringify + '');
        var toast = this.toast.create({
            message: 'Movie was removed from Watch List',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\dbrro\Projects\movies\src\pages\list\list.html"*/'<favorites></favorites>\n<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Watch List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines class="results">\n    <ion-item-sliding *ngFor="let movie of movies">\n      <button ion-item (click)="moreInfo(movie)">\n        <ion-thumbnail item-start>\n          <img src="http://image.tmdb.org/t/p/w185{{movie.poster_path}}" *ngIf="movie.poster_path">\n          <img src="../../assets/img/no-cover.jpg" *ngIf="!movie.poster_path">\n        </ion-thumbnail>\n        <h2 *ngIf="movie.original_title">{{ movie.original_title }}</h2>\n        <p><span id="type">Movie</span> • {{movie.release_date}}</p>\n      </button>\n      <ion-item-options side="right">\n        <button color="secondary" ion-button (click)="watched(movie)">Watched</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\dbrro\Projects\movies\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
], ListPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_details_details__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_nowplaying_nowplaying__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_popular_popular__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_youtube_youtube__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__loadFavorites_service__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_favorites_favorites__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_nowplaying_nowplaying__["a" /* NowplayingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_popular_popular__["a" /* PopularPage */],
            __WEBPACK_IMPORTED_MODULE_9__pipes_youtube_youtube__["a" /* YoutubePipe */],
            __WEBPACK_IMPORTED_MODULE_15__components_favorites_favorites__["a" /* FavoritesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/nowplaying/nowplaying.module#NowplayingPageModule', name: 'NowplayingPage', segment: 'nowplaying', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/popular/popular.module#PopularPageModule', name: 'PopularPage', segment: 'popular', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_nowplaying_nowplaying__["a" /* NowplayingPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_popular_popular__["a" /* PopularPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_14__loadFavorites_service__["a" /* LoadFavoritesService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_nowplaying_nowplaying__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_popular_popular__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Watch List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Now Playing', component: __WEBPACK_IMPORTED_MODULE_6__pages_nowplaying_nowplaying__["a" /* NowplayingPage */] },
            { title: 'Popular Movies', component: __WEBPACK_IMPORTED_MODULE_7__pages_popular_popular__["a" /* PopularPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\dbrro\Projects\movies\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar color="danger">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\dbrro\Projects\movies\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubePipe = (function () {
    function YoutubePipe(dom) {
        this.dom = dom;
    }
    YoutubePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.dom.bypassSecurityTrustResourceUrl(value);
    };
    return YoutubePipe;
}());
YoutubePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'youtube',
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
], YoutubePipe);

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadFavoritesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadFavoritesService = (function () {
    function LoadFavoritesService(event, storage) {
        var _this = this;
        this.event = event;
        this.storage = storage;
        storage.get('favorites').then(function (val) {
            if (val != '' || val == null) {
                _this.favorites = JSON.parse(val);
                _this.event.publish('favorites', _this.favorites);
            }
        });
    }
    return LoadFavoritesService;
}());
LoadFavoritesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], LoadFavoritesService);

//# sourceMappingURL=loadFavorites.service.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the FavoritesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FavoritesComponent = (function () {
    function FavoritesComponent(event, storage) {
        var _this = this;
        this.event = event;
        this.storage = storage;
        storage.get('favorites').then(function (val) {
            if (val != '' || val == null) {
                _this.favorites = JSON.parse(val);
                console.log(_this.favorites);
                _this.event.publish('favorites', _this.favorites);
            }
        });
    }
    return FavoritesComponent;
}());
FavoritesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'favorites',template:/*ion-inline-start:"C:\Users\dbrro\Projects\movies\src\components\favorites\favorites.html"*/''/*ion-inline-end:"C:\Users\dbrro\Projects\movies\src\components\favorites\favorites.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], FavoritesComponent);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsPage = (function () {
    function DetailsPage(toast, event, navCtrl, navParams, storage) {
        this.toast = toast;
        this.event = event;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.movie = [];
        this.releaseYear = 0;
        this.trailer = [];
        this.favorites = [];
        this.existInArray = true;
        this.id = navParams.get("id");
    }
    DetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.event.subscribe('favorites', function (data) {
            console.log(data);
            _this.favorites = data;
        });
    };
    DetailsPage.prototype.ngOnDestroy = function () {
        this.event.unsubscribe('favorites');
    };
    DetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        fetch('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=7d30f8985dbf498b3eb110b86dc6c962&language=da-DK')
            .then(function (response) { return response.text(); })
            .then(function (data) {
            _this.movie = JSON.parse(data);
            _this.releaseYear = _this.movie['release_date'].substring(0, 4);
        })
            .catch(function (err) { return console.log('An error occured!'); });
        fetch('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=7d30f8985dbf498b3eb110b86dc6c962&append_to_response=videos,images')
            .then(function (response) { return response.text(); })
            .then(function (data) {
            var trailer = JSON.parse(data);
            _this.trailer = trailer['videos']['results'][0];
        });
    };
    DetailsPage.prototype.getLink = function () {
        var fullLink = 'https://www.youtube.com/embed/' + this.trailer['key'];
        return fullLink;
    };
    DetailsPage.prototype.pushItem = function (item) {
        this.favorites.push(item);
        var stringify = JSON.stringify(this.favorites);
        this.storage.set('favorites', '' + stringify + '');
        console.log(this.favorites);
        var toast = this.toast.create({
            message: 'Movie was added to Watch List',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    return DetailsPage;
}());
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"C:\Users\dbrro\Projects\movies\src\pages\details\details.html"*/'<favorites></favorites>\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>{{movie.Title}}</ion-title>\n    <ion-buttons end>\n      <p class="rating">\n        <ion-icon name="star"></ion-icon> {{movie.vote_average}}/<sub>10</sub>\n      </p>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- TRAILER -->\n  <iframe id="trailer" width="100%" height="240px" [src]=\'getLink() | youtube\' frame-border="0" allowfullscreen></iframe>\n  <!-- /TRAILER -->\n  <div class="basicInfo">\n      <span id="title">{{movie.original_title}}</span> <span id="year">({{releaseYear}})</span>\n      <ion-icon color="secondary" id="favorite" name="add" (click)="pushItem(movie)" *ngIf="existInArray"></ion-icon>\n  </div>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <img src="http://image.tmdb.org/t/p/w300/{{movie.poster_path}}" *ngIf="movie.poster_path">\n        <img src="../../assets/img/no-cover.jpg" *ngIf="!movie.poster_path">\n      </ion-col>\n      <ion-col col-8>\n        {{movie.overview}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      \n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\dbrro\Projects\movies\src\pages\details\details.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
], DetailsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=details.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map