import { Component, OnInit } from '@angular/core';

import { Quotation } from '../../models/quotation.interface';
@Component({
  selector: 'app-quotation-viewer',
  templateUrl: './quotation-viewer.component.html',
  styleUrls: ['./quotation-viewer.component.css'],
})
export class QuotationViewerComponent implements OnInit {
  quotation: Quotation = {};
  constructor() {}

  ngOnInit(): void {}

  onCreateQuotation(event: Quotation) {}
}
