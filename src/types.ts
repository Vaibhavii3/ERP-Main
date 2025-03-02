export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  batchNumber: string;
  expiryDate: string;
  currentLocation: string;
  status: 'In Stock' | 'In Transit' | 'Delivered' | 'Sold';
}

export interface TrackingEvent {
  id: string;
  productId: string;
  timestamp: string;
  location: string;
  action: 'Procured' | 'Stored' | 'Shipped' | 'Received' | 'Sold';
  notes: string;
}

export interface Warehouse {
  id: string;
  name: string;
  location: string;
  zones: string[];
}

export interface StockLevel {
  productId: string;
  warehouseId: string;
  quantity: number;
  threshold: number;
}