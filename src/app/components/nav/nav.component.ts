import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  list = [
    {
      route: 'dashboard',
      name: 'Home',
    },
    {
      route: 'quotation',
      name: 'Quotation',
    },
    {
      route: 'Section3',
      name: 'Section4',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
