import { Product, TrackingEvent, Warehouse, StockLevel } from './types';

export const products: Product[] = [
  {
    id: 'P001',
    name: 'Organic Apples',
    sku: 'FRUIT-001',
    category: 'Produce',
    price: 2.99,
    batchNumber: 'B2023-001',
    expiryDate: '2025-06-15',
    currentLocation: 'Central Warehouse',
    status: 'In Stock'
  },
  {
    id: 'P002',
    name: 'Premium Coffee Beans',
    sku: 'COFFEE-002',
    category: 'Beverages',
    price: 12.99,
    batchNumber: 'B2023-045',
    expiryDate: '2025-12-30',
    currentLocation: 'North Warehouse',
    status: 'In Transit'
  },
  {
    id: 'P003',
    name: 'Whole Grain Bread',
    sku: 'BAKERY-003',
    category: 'Bakery',
    price: 3.49,
    batchNumber: 'B2023-089',
    expiryDate: '2025-05-20',
    currentLocation: 'South Retail Store',
    status: 'Delivered'
  },
  {
    id: 'P004',
    name: 'Organic Milk',
    sku: 'DAIRY-004',
    category: 'Dairy',
    price: 4.29,
    batchNumber: 'B2023-112',
    expiryDate: '2025-05-10',
    currentLocation: 'East Distribution Center',
    status: 'In Stock'
  },
  {
    id: 'P005',
    name: 'Free-Range Eggs',
    sku: 'DAIRY-005',
    category: 'Dairy',
    price: 5.99,
    batchNumber: 'B2023-156',
    expiryDate: '2025-05-25',
    currentLocation: 'West Retail Store',
    status: 'Sold'
  }
];

export const trackingEvents: TrackingEvent[] = [
  {
    id: 'E001',
    productId: 'P001',
    timestamp: '2025-04-01T08:30:00Z',
    location: 'Supplier Facility',
    action: 'Procured',
    notes: 'Initial procurement from organic farm'
  },
  {
    id: 'E002',
    productId: 'P001',
    timestamp: '2025-04-02T10:15:00Z',
    location: 'Central Warehouse',
    action: 'Stored',
    notes: 'Stored in refrigerated section, Zone A'
  },
  {
    id: 'E003',
    productId: 'P002',
    timestamp: '2025-04-01T09:45:00Z',
    location: 'Supplier Facility',
    action: 'Procured',
    notes: 'Premium coffee beans from Colombia'
  },
  {
    id: 'E004',
    productId: 'P002',
    timestamp: '2025-04-03T11:30:00Z',
    location: 'North Warehouse',
    action: 'Stored',
    notes: 'Stored in dry goods section, Zone C'
  },
  {
    id: 'E005',
    productId: 'P002',
    timestamp: '2025-04-05T08:00:00Z',
    location: 'North Warehouse',
    action: 'Shipped',
    notes: 'En route to East Distribution Center'
  },
  {
    id: 'E006',
    productId: 'P003',
    timestamp: '2025-04-02T07:30:00Z',
    location: 'Bakery Supplier',
    action: 'Procured',
    notes: 'Fresh whole grain bread'
  },
  {
    id: 'E007',
    productId: 'P003',
    timestamp: '2025-04-02T14:00:00Z',
    location: 'Central Warehouse',
    action: 'Stored',
    notes: 'Stored in bakery section, Zone B'
  },
  {
    id: 'E008',
    productId: 'P003',
    timestamp: '2025-04-03T06:30:00Z',
    location: 'Central Warehouse',
    action: 'Shipped',
    notes: 'En route to South Retail Store'
  },
  {
    id: 'E009',
    productId: 'P003',
    timestamp: '2025-04-03T09:45:00Z',
    location: 'South Retail Store',
    action: 'Received',
    notes: 'Received and placed on shelves'
  },
  {
    id: 'E010',
    productId: 'P004',
    timestamp: '2025-04-01T06:15:00Z',
    location: 'Dairy Farm',
    action: 'Procured',
    notes: 'Organic milk from local farm'
  },
  {
    id: 'E011',
    productId: 'P004',
    timestamp: '2025-04-01T16:30:00Z',
    location: 'East Distribution Center',
    action: 'Stored',
    notes: 'Stored in refrigerated section, Zone A'
  },
  {
    id: 'E012',
    productId: 'P005',
    timestamp: '2025-04-02T07:00:00Z',
    location: 'Poultry Farm',
    action: 'Procured',
    notes: 'Free-range eggs from certified farm'
  },
  {
    id: 'E013',
    productId: 'P005',
    timestamp: '2025-04-02T15:45:00Z',
    location: 'West Warehouse',
    action: 'Stored',
    notes: 'Stored in refrigerated section, Zone B'
  },
  {
    id: 'E014',
    productId: 'P005',
    timestamp: '2025-04-03T07:30:00Z',
    location: 'West Warehouse',
    action: 'Shipped',
    notes: 'En route to West Retail Store'
  },
  {
    id: 'E015',
    productId: 'P005',
    timestamp: '2025-04-03T10:15:00Z',
    location: 'West Retail Store',
    action: 'Received',
    notes: 'Received and placed in refrigerated display'
  },
  {
    id: 'E016',
    productId: 'P005',
    timestamp: '2025-04-04T14:20:00Z',
    location: 'West Retail Store',
    action: 'Sold',
    notes: 'Purchased by customer'
  }
];

export const warehouses: Warehouse[] = [
  {
    id: 'W001',
    name: 'Central Warehouse',
    location: '123 Main St, Central City',
    zones: ['Zone A - Refrigerated', 'Zone B - Bakery', 'Zone C - Dry Goods', 'Zone D - General']
  },
  {
    id: 'W002',
    name: 'North Warehouse',
    location: '456 North Ave, North City',
    zones: ['Zone A - Refrigerated', 'Zone B - Frozen', 'Zone C - Dry Goods', 'Zone D - General']
  },
  {
    id: 'W003',
    name: 'East Distribution Center',
    location: '789 East Blvd, East City',
    zones: ['Zone A - Refrigerated', 'Zone B - Frozen', 'Zone C - Dry Goods', 'Zone D - General']
  },
  {
    id: 'W004',
    name: 'West Warehouse',
    location: '101 West St, West City',
    zones: ['Zone A - Refrigerated', 'Zone B - Frozen', 'Zone C - Dry Goods', 'Zone D - General']
  },
  {
    id: 'W005',
    name: 'South Retail Store',
    location: '202 South Rd, South City',
    zones: ['Zone A - Front Store', 'Zone B - Back Store', 'Zone C - Storage']
  },
  {
    id: 'W006',
    name: 'West Retail Store',
    location: '303 West End, West City',
    zones: ['Zone A - Front Store', 'Zone B - Back Store', 'Zone C - Storage']
  }
];

export const stockLevels: StockLevel[] = [
  { productId: 'P001', warehouseId: 'W001', quantity: 250, threshold: 50 },
  { productId: 'P001', warehouseId: 'W002', quantity: 150, threshold: 30 },
  { productId: 'P002', warehouseId: 'W002', quantity: 200, threshold: 40 },
  { productId: 'P002', warehouseId: 'W003', quantity: 25, threshold: 50 },
  { productId: 'P003', warehouseId: 'W001', quantity: 100, threshold: 25 },
  { productId: 'P003', warehouseId: 'W005', quantity: 45, threshold: 15 },
  { productId: 'P004', warehouseId: 'W003', quantity: 175, threshold: 40 },
  { productId: 'P004', warehouseId: 'W004', quantity: 125, threshold: 30 },
  { productId: 'P005', warehouseId: 'W004', quantity: 80, threshold: 20 },
  { productId: 'P005', warehouseId: 'W006', quantity: 5, threshold: 15 }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductEvents = (productId: string): TrackingEvent[] => {
  return trackingEvents.filter(event => event.productId === productId)
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
};

export const getWarehouseById = (id: string): Warehouse | undefined => {
  return warehouses.find(warehouse => warehouse.id === id);
};

export const getProductStockLevels = (productId: string): StockLevel[] => {
  return stockLevels.filter(stock => stock.productId === productId);
};

export const getWarehouseStock = (warehouseId: string): StockLevel[] => {
  return stockLevels.filter(stock => stock.warehouseId === warehouseId);
};

export const getLowStockItems = (): StockLevel[] => {
  return stockLevels.filter(stock => stock.quantity <= stock.threshold);
};