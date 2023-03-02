import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pickup-info',
  templateUrl: './pickup-info.component.html',
  styleUrls: ['./pickup-info.component.css'],
})
export class PickupInfoComponent implements OnInit {
  @Input() parent: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
