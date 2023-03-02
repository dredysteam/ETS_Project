import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-pallets',
  templateUrl: './stock-pallets.component.html',
  styleUrls: ['./stock-pallets.component.css'],
})
export class StockPalletsComponent implements OnInit {
  @Input() parent: FormGroup;

  constructor() {}

  ngOnInit(): void {}

  get pallets() {
    return (this.parent.get('stockPallets') as FormArray).controls;
  }
}
