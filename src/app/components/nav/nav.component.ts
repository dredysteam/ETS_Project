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
      route: 'Section2',
      name: 'Section2',
    },
    {
      route: 'Section3',
      name: 'Section4',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
