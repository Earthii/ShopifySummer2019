import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Database } from './services/database.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ItemTableComponent } from './item-table/item-table.component';

@NgModule({
  declarations: [AppComponent, SearchBoxComponent, ItemTableComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [Database],
  bootstrap: [AppComponent]
})
export class AppModule {}
