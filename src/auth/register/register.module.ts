import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

//containers
import { RegisterComponent } from './containers/register/register.component';

const ROUTES: Routes = [{ path: '', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES), SharedModule],
})
export class RegisterModule {}
