import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get('https://restcountries.eu/rest/v2/lang/es');
  }
}
