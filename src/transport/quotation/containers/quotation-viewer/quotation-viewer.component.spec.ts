import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationViewerComponent } from './quotation-viewer.component';

describe('QuotationViewerComponent', () => {
  let component: QuotationViewerComponent;
  let fixture: ComponentFixture<QuotationViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
