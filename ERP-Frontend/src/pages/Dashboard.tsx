import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, AlertTriangle, BarChart2, Warehouse } from 'lucide-react';
import { products, warehouses, getLowStockItems } from '../data';

const Dashboard: React.FC = () => {
  const lowStockItems = getLowStockItems();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
              <Package className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Products</p>
              <p className="text-2xl font-semibold">{products.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <Warehouse className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Warehouses</p>
              <p className="text-2xl font-semibold">{warehouses.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Low Stock Alerts</p>
              <p className="text-2xl font-semibold">{lowStockItems.length}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">In Transit</p>
              <p className="text-2xl font-semibold">{products.filter(p => p.status === 'In Transit').length}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-red-600 text-white">
            <h2 className="font-semibold text-lg flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Low Stock Items
            </h2>
          </div>
          <div className="p-6">
            {lowStockItems.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {lowStockItems.slice(0, 5).map((item) => {
                  const product = products.find(p => p.id === item.productId);
                  const warehouse = warehouses.find(w => w.id === item.warehouseId);
                  
                  return product && warehouse ? (
                    <li key={`${item.productId}-${item.warehouseId}`} className="py-3">
                      <Link to={`/product/${product.id}`} className="flex justify-between hover:bg-gray-50 p-2 rounded">
                        <div>
                          <p className="font-medium text-gray-800">{product.name}</p>
                          <p className="text-sm text-gray-500">{warehouse.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-red-600 font-medium">{item.quantity} units</p>
                          <p className="text-xs text-gray-500">Threshold: {item.threshold}</p>
                        </div>
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            ) : (
              <p className="text-gray-500">No low stock items</p>
            )}
            
            {lowStockItems.length > 5 && (
              <div className="mt-4">
                <Link to="/inventory" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                  View all {lowStockItems.length} low stock items
                </Link>
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 bg-blue-600 text-white">
            <h2 className="font-semibold text-lg flex items-center">
              <BarChart2 className="h-5 w-5 mr-2" />
              Recent Activity
            </h2>
          </div>
          <div className="p-6">
            <ul className="divide-y divide-gray-200">
              <li className="py-3">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Package className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">New shipment received</p>
                    <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Truck className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Shipment dispatched to West Retail Store</p>
                    <p className="text-xs text-gray-500">Today, 9:15 AM</p>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Low stock alert: Organic Milk</p>
                    <p className="text-xs text-gray-500">Yesterday, 4:45 PM</p>
                  </div>
                </div>
              </li>
              <li className="py-3">
                <div className="flex items-center">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Package className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Inventory count completed</p>
                    <p className="text-xs text-gray-500">Yesterday, 2:30 PM</p>
                  </div>
                </div>
              </li>
            </ul>
            
            <div className="mt-4">
              <Link to="/activity" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                View all activity
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="font-semibold text-lg text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/products" className="flex flex-col items-center p-4 bg-blue-100 rounded-lg hover:bg-blue-200">
            <Package className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">View Products</span>
          </Link>
          <Link to="/qr-scanner" className="flex flex-col items-center p-4 bg-green-100 rounded-lg hover:bg-green-200">
            <Package className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Scan QR Code</span>
          </Link>
          <Link to="/tracking" className="flex flex-col items-center p-4 bg-red-100 rounded-lg hover:bg-red-200">
            <Truck className="h-8 w-8 text-red-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Track Shipments</span>
          </Link>
          <Link to="/analytics" className="flex flex-col items-center p-4 bg-purple-100 rounded-lg hover:bg-purple-200">
            <BarChart2 className="h-8 w-8 text-indigo-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">View Analytics</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;