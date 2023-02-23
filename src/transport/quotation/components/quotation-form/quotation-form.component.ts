import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

//interfaces
import { Quotation } from '../../models/quotation.interface';
@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css'],
})
export class QuotationFormComponent implements OnInit, OnChanges {
  // @Input() detail: Quotation;
  quotation: Quotation = {};
  @Output()
  create: EventEmitter<Quotation> = new EventEmitter<Quotation>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['detail']) {
    //   this.detail = Object.assign({}, changes['detail'].currentValue);
    // }
  }

  handleSubmit(quotation: Quotation) {
    console.log(quotation);
    // this.create.emit(quotation);
    // if (isValid) {
    //   this.create.emit(quotation);
    // }
  }
}
