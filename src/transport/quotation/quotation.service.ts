import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quotation } from './models/quotation.interface';

@Injectable({
  providedIn: 'root',
})
export class QuotationService {
  constructor(private http: HttpClient) {}

  // getCountries() {
  //   return this.http.get('https://restcountries.com/v2/all');
  // }

  addQuotation(quotation: Quotation) {
    console.log(quotation);
  }
}
