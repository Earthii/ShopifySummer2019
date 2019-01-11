import { Database } from './services/database.service';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ShopifySummer2019';
  items: any[] = [];
  favorites: any[] = [];

  constructor(private db: Database) {}

  ngOnInit() {
    if (window.localStorage.getItem('favorites')) {
      // initialize favorites
      this.favorites = JSON.parse(window.localStorage.getItem('favorites'));
    }
  }

  search(event) {
    this.db.queryWithKeywords(event).subscribe((data: any[]) => {
      this.items = data;
      const favInStringArr = this.favorites.map(fav => {
        const tmp = Object.assign({}, fav);
        delete tmp.alreadyFav;
        return JSON.stringify(tmp);
      });

      this.items.forEach(item => {
        if (favInStringArr.includes(JSON.stringify(item))) {
          item.alreadyFav = true;
        }
      });
    });
  }

  clear() {
    this.items = [];
  }

  saveToFav(item) {
    item.alreadyFav = true;
    this.favorites.push(item);
    // this.cookieService.set('favorites', JSON.stringify(this.favorites));
    window.localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  removeFromFav(item) {
    item.alreadyFav = false;
    this.favorites = this.favorites.filter(fav => !this.equalItems(fav, item));
    // this.cookieService.set('favorites', JSON.stringify(this.favorites));
    window.localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  private equalItems(item1, item2) {
    return (
      item1.body === item2.body &&
      item1.category === item2.category &&
      item1.keywords === item2.keywords &&
      item1.title === item2.title
    );
  }
}
