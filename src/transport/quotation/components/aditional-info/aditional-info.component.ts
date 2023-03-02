import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-aditional-info',
  templateUrl: './aditional-info.component.html',
  styleUrls: ['./aditional-info.component.css'],
})
export class AditionalInfoComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}
