import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css'],
})
export class DeliveryInfoComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
