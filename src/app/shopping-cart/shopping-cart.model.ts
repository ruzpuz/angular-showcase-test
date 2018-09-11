import { Shirt } from '../shirts/shirt.model';
export class ChartItem {
  item: Shirt;
  number: number;
}
export interface ShoppingCart {
  [id: number]: ChartItem;
}
