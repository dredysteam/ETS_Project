import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//containers
import { DashboardComponent } from './containers/dashboard/dashboard.component';

//Routes
export const ROUTES: Routes = [{ path: '', component: DashboardComponent }];
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class DashboardModule {}
