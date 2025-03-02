import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Calendar, MapPin, Tag, Printer, Download } from 'lucide-react';
import { getProductById, getProductEvents, getProductStockLevels, getWarehouseById } from '../data';
import TrackingTimeline from '../components/TrackingTimeline';
import QRCodeGenerator from '../components/QRCodeGenerator';
import StockLevelIndicator from '../components/StockLevelIndicator';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Get product details
  const product = id ? getProductById(id) : undefined;
  
  // Get tracking events for this product
  const events = id ? getProductEvents(id) : [];
  
  // Get stock levels for this product
  const stockLevels = id ? getProductStockLevels(id) : [];
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/products" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'In Transit':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-purple-100 text-purple-800';
      case 'Sold':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/products" className="inline-flex items-center text-indigo-600 hover:text-indigo-800">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Products
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="px-6 py-4 bg-indigo-700 text-white">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
              {product.status}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">SKU</p>
                  <p className="font-medium flex items-center">
                    <Tag className="h-4 w-4 mr-1 text-gray-400" />
                    {product.sku}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Batch Number</p>
                  <p className="font-medium flex items-center">
                    <Package className="h-4 w-4 mr-1 text-gray-400" />
                    {product.batchNumber}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Expiry Date</p>
                  <p className="font-medium flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                    {new Date(product.expiryDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Current Location</p>
                  <p className="font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                    {product.currentLocation}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium text-indigo-600">${product.price.toFixed(2)}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Stock Levels</h2>
                {stockLevels.length > 0 ? (
                  <div>
                    {stockLevels.map(stockLevel => {
                      const warehouse = getWarehouseById(stockLevel.warehouseId);
                      return warehouse ? (
                        <StockLevelIndicator 
                          key={stockLevel.warehouseId} 
                          stockLevel={stockLevel} 
                          warehouseName={warehouse.name} 
                        />
                      ) : null;
                    })}
                  </div>
                ) : (
                  <p className="text-gray-500">No stock information available</p>
                )}
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center border-l pl-6">
              <QRCodeGenerator product={product} size={180} />
              
              <div className="mt-6 w-full">
                <button className="w-full mb-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Printer className="h-4 w-4 mr-2" />
                  Print QR Code
                </button>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Download className="h-4 w-4 mr-2" />
                  Download QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 bg-indigo-700 text-white">
          <h2 className="text-lg font-semibold">Product Journey</h2>
        </div>
        <div className="p-6">
          {events.length > 0 ? (
            <TrackingTimeline events={events} />
          ) : (
            <p className="text-gray-500">No tracking events available for this product.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;