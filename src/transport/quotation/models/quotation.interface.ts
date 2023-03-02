export interface Quotation {
  pickupZipcode?: number;
  pickupDate?: Date;
  liftgate?: boolean;
  deliveryZipcode?: number;
  appointment?: boolean;
  commodity?: string;
  palletType?: string;
  palletHigh?: number;
  palletQuantity?: number;
  totalWeight?: number;
  freightType?: string;
}
