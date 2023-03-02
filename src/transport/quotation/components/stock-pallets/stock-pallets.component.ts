import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { StockPallet } from '../../models/stockpallet.interface';

@Component({
  selector: 'app-stock-pallets',
  templateUrl: './stock-pallets.component.html',
  styleUrls: ['./stock-pallets.component.css'],
})
export class StockPalletsComponent implements OnInit {
  @Input() parent: FormGroup;

  @Output() removed = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  get pallets() {
    return (this.parent.get('stockPallets') as FormArray).controls;
  }

  onRemove(group, index) {
    this.removed.emit({ group, index });
  }
}
