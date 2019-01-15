import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Database {
  baseUrl = 'https://shopifysummer2019db.herokuapp.com';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.baseUrl}/api/v1/data`);
  }

  queryWithKeywords(keywords: string) {
    return this.http.get(`${this.baseUrl}/api/v1/data?keywords=${keywords}`);
  }
}
