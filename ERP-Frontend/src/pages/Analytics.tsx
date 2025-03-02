import React from 'react';
import { BarChart2, TrendingUp, Package, Truck, AlertTriangle } from 'lucide-react';
import { products, warehouses, getLowStockItems } from '../data';

const Analytics: React.FC = () => {
  const lowStockItems = getLowStockItems();
  
  // Calculate statistics
  const totalProducts = products.length;
  const inStockProducts = products.filter(p => p.status === 'In Stock').length;
  const inTransitProducts = products.filter(p => p.status === 'In Transit').length;
  const deliveredProducts = products.filter(p => p.status === 'Delivered').length;
  const soldProducts = products.filter(p => p.status === 'Sold').length;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <BarChart2 className="h-6 w-6 mr-2 text-indigo-600" />
        Analytics Dashboard
      </h1>
      
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <Package className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Products</p>
              <p className="text-2xl font-semibold">{totalProducts}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Status Breakdown</span>
            </div>
            <div className="mt-2 flex h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div className="bg-green-500" style={{ width: `${(inStockProducts / totalProducts) * 100}%` }}></div>
              <div className="bg-blue-500" style={{ width: `${(inTransitProducts / totalProducts) * 100}%` }}></div>
              <div className="bg-purple-500" style={{ width: `${(deliveredProducts / totalProducts) * 100}%` }}></div>
              <div className="bg-gray-500" style={{ width: `${(soldProducts / totalProducts) * 100}%` }}></div>
            </div>
            <div className="mt-2 flex text-xs justify-between">
              <span className="text-green-600">{inStockProducts} In Stock</span>
              <span className="text-blue-600">{inTransitProducts} In Transit</span>
              <span className="text-purple-600">{deliveredProducts} Delivered</span>
              <span className="text-gray-600">{soldProducts} Sold</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Inventory Value</p>
              <p className="text-2xl font-semibold">$12,450.75</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Monthly Trend</span>
              <span className="text-xs text-green-600">+5.2%</span>
            </div>
            <div className="mt-2 h-10">
              <div className="flex items-end h-full space-x-1">
                <div className="bg-indigo-100 w-1/6 h-4/6 rounded-t"></div>
                <div className="bg-indigo-200 w-1/6 h-3/6 rounded-t"></div>
                <div className="bg-indigo-300 w-1/6 h-5/6 rounded-t"></div>
                <div className="bg-indigo-400 w-1/6 h-3/6 rounded-t"></div>
                <div className="bg-indigo-500 w-1/6 h-4/6 rounded-t"></div>
                <div className="bg-indigo-600 w-1/6 h-full rounded-t"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Low Stock Alerts</p>
              <p className="text-2xl font-semibold">{lowStockItems.length}</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">By Warehouse</span>
            </div>
            <div className="mt-2 space-y-2">
              {warehouses.slice(0, 3).map(warehouse => {
                const count = lowStockItems.filter(item => item.warehouseId === warehouse.id).length;
                return (
                  <div key={warehouse.id} className="flex items-center justify-between">
                    <span className="text-xs truncate">{warehouse.name}</span>
                    <span className="text-xs font-medium">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Shipments</p>
              <p className="text-2xl font-semibold">24</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">Status</span>
            </div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs">In Transit</span>
                <span className="text-xs font-medium">8</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Delivered</span>
                <span className="text-xs font-medium">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs">Delayed</span>
                <span className="text-xs font-medium">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts and Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-indigo-700 text-white">
            <h2 className="font-semibold text-lg">Inventory by Category</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {/* Simulated chart data */}
              {['Produce', 'Beverages', 'Bakery', 'Dairy'].map(category => {
                const count = products.filter(p => p.category === category).length;
                const percentage = Math.round((count / totalProducts) * 100);
                
                return (
                  <div key={category}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{category}</span>
                      <span className="text-sm font-medium text-gray-700">{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          category === 'Produce' ? 'bg-green-500' :
                          category === 'Beverages' ? 'bg-blue-500' :
                          category === 'Bakery' ? 'bg-yellow-500' :
                          'bg-purple-500'
                        }`} 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-indigo-700 text-white">
            <h2 className="font-semibold text-lg">Warehouse Capacity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {/* Simulated warehouse capacity data */}
              {warehouses.slice(0, 4).map((warehouse, index) => {
                // Generate random capacity percentage for demo
                const capacityPercentage = [75, 45, 90, 60][index];
                
                return (
                  <div key={warehouse.id}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{warehouse.name}</span>
                      <span className="text-sm font-medium text-gray-700">{capacityPercentage}% full</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          capacityPercentage > 80 ? 'bg-red-500' :
                          capacityPercentage > 60 ? 'bg-yellow-500' :
                          'bg-green-500'
                        }`} 
                        style={{ width: `${capacityPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-indigo-700 text-white">
            <h2 className="font-semibold text-lg">Expiring Soon</h2>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              {products.slice(0, 3).map(product => (
                <li key={product.id} className="py-3">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{product.name}</p>
                      <p className="text-sm text-gray-500">Batch: {product.batchNumber}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-red-600">
                        Expires: {new Date(product.expiryDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-indigo-700 text-white">
            <h2 className="font-semibold text-lg">Recent Shipments</h2>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              <li className="py-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Shipment #SH-2023-045</p>
                    <p className="text-sm text-gray-500">To: West Retail Store</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-600">In Transit</p>
                    <p className="text-xs text-gray-500">ETA: 2 hours</p>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Shipment #SH-2023-044</p>
                    <p className="text-sm text-gray-500">To: East Distribution Center</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">Delivered</p>
                    <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Shipment #SH-2023-043</p>
                    <p className="text-sm text-gray-500">To: South Retail Store</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">Delivered</p>
                    <p className="text-xs text-gray-500">Yesterday, 2:15 PM</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-indigo-700 text-white">
            <h2 className="font-semibold text-lg">Top Moving Products</h2>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              <li className="py-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Organic Milk</p>
                    <p className="text-sm text-gray-500">Dairy</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">425 units</p>
                    <p className="text-xs text-green-600">+12% this week</p>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Premium Coffee Beans</p>
                    <p className="text-sm text-gray-500">Beverages</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">310 units</p>
                    <p className="text-xs text-green-600">+8% this week</p>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Whole Grain Bread</p>
                    <p className="text-sm text-gray-500">Bakery</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">275 units</p>
                    <p className="text-xs text-green-600">+5% this week</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;