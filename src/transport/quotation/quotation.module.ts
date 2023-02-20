import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// containers
import { GetQuoteComponent } from './containers/get-quote/get-quote.component';

//Routes

export const ROUTES: Routes = [{ path: '', component: GetQuoteComponent }];

@NgModule({
  declarations: [GetQuoteComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class QuotationModule {}
