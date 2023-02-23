export interface Quotation {
  pickupZipCode?: number;
  pickupDate?: Date;
  lifgate?: boolean;
  deliveryZipCode?: number;
  appointment?: boolean;
  commodity?: string;
  palletType?: string;
  palletHigh?: number;
  palletQuantity?: number;
  totalWeight?: number;
  freightType?: string;
}
