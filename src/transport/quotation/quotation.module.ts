import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// containers
import { QuotationViewerComponent } from './containers/quotation-viewer/quotation-viewer.component';

// components
import { QuotationFormComponent } from './components/quotation-form/quotation-form.component';
import { PickupInfoComponent } from './components/pickup-info/pickup-info.component';
import { DeliveryInfoComponent } from './components/delivery-info/delivery-info.component';
import { AditionalInfoComponent } from './components/aditional-info/aditional-info.component';
import { PalletSelectorComponent } from './components/pallet-selector/pallet-selector.component';
import { StockPalletsComponent } from './components/stock-pallets/stock-pallets.component';

//services
import { QuotationService } from './quotation.service';

//Routes

export const ROUTES: Routes = [
  { path: '', component: QuotationViewerComponent },
];

@NgModule({
  declarations: [
    QuotationFormComponent,
    QuotationViewerComponent,
    PickupInfoComponent,
    DeliveryInfoComponent,
    AditionalInfoComponent,
    PalletSelectorComponent,
    StockPalletsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
  ],
  providers: [QuotationService],
})
export class QuotationModule {}
