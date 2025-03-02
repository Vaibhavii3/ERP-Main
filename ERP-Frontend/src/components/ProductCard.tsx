import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Calendar, MapPin, Tag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="p-5">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
              {product.status}
            </span>
          </div>
          
          <div className="space-y-2 mt-3">
            <div className="flex items-center text-sm text-gray-600">
              <Tag className="h-4 w-4 mr-2" />
              <span>SKU: {product.sku}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Package className="h-4 w-4 mr-2" />
              <span>Batch: {product.batchNumber}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Expires: {new Date(product.expiryDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{product.currentLocation}</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <span className="text-indigo-600 font-semibold">${product.price.toFixed(2)}</span>
            <span className="text-xs text-gray-500">{product.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;