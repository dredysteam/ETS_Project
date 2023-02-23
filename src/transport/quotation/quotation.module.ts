import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// containers
import { QuotationViewerComponent } from './containers/quotation-viewer/quotation-viewer.component';

// components
import { QuotationFormComponent } from './components/quotation-form/quotation-form.component';

//services
import { QuotationService } from './quotation.service';

//Routes

export const ROUTES: Routes = [
  { path: '', component: QuotationViewerComponent },
];

@NgModule({
  declarations: [QuotationFormComponent, QuotationViewerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [QuotationService],
})
export class QuotationModule {}
