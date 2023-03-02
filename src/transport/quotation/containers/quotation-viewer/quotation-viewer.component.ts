import { Component, OnInit } from '@angular/core';

import { Quotation } from '../../models/quotation.interface';
import { QuotationService } from '../../quotation.service';
@Component({
  selector: 'app-quotation-viewer',
  templateUrl: './quotation-viewer.component.html',
  styleUrls: ['./quotation-viewer.component.css'],
})
export class QuotationViewerComponent implements OnInit {
  quotation: Quotation;
  // countries: any;
  constructor(private quotationService: QuotationService) {}

  ngOnInit(): void {
    // this.quotationService
    //   .getCountries()
    //   .subscribe((countries) => (this.countries = countries));
  }

  addQuotation(event: Quotation) {
    this.quotationService.addQuotation(event);
  }
}
