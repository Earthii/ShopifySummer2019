import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Database {
  baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.baseUrl}/api/v1/data`);
  }

  queryWithKeywords(keywords: string) {
    return this.http.get(`${this.baseUrl}/api/v1/data?keywords=${keywords}`);
  }
}
