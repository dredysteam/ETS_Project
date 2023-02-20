import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'quotation',
    loadChildren: () =>
      import('./quotation/quotation.module').then((m) => m.QuotationModule),
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class TransportModule {}
