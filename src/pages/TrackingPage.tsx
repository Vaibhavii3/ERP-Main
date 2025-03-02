import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Truck, Package } from 'lucide-react';
import { products } from '../data';

const TrackingPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<typeof products>([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) return;
    
    // Filter products based on search term
    const results = products.filter(product => 
      product.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setSearchResults(results);
    setHasSearched(true);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="px-6 py-4 bg-indigo-700 text-white">
            <h1 className="text-xl font-bold flex items-center">
              <Truck className="h-6 w-6 mr-2" />
              Product Tracking
            </h1>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Enter a product ID, SKU, or name to track its current status and journey.
            </p>
            
            <form onSubmit={handleSearch}>
              <div className="flex">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md rounded-r-none leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter product ID, SKU or name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md rounded-l-none shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Track
                </button>
              </div>
            </form>
          </div>
        </div>
        
        {hasSearched && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 bg-gray-50 border-b">
              <h2 className="font-medium text-gray-700">Search Results</h2>
            </div>
            
            <div className="divide-y divide-gray-200">
              {searchResults.length > 0 ? (
                searchResults.map(product => (
                  <div 
                    key={product.id} 
                    className="p-4 hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 pt-1">
                        <Package className="h-6 w-6 text-indigo-500" />
                      </div>
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            product.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                            product.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                            product.status === 'Delivered' ? 'bg-purple-100 text-purple-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {product.status}
                          </span>
                        </div>
                        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <span className="font-medium text-gray-900 mr-1">ID:</span> {product.id}
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <span className="font-medium text-gray-900 mr-1">SKU:</span> {product.sku}
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500">
                            <span className="font-medium text-gray-900 mr-1">Location:</span> {product.currentLocation}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-6 text-center">
                  <p className="text-gray-500">No products found matching your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recently Tracked</h2>
          <div className="space-y-4">
            {products.slice(0, 3).map(product => (
              <div 
                key={product.id} 
                className="border border-gray-200 rounded-md p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Package className="h-5 w-5 text-indigo-500 mr-2" />
                    <span className="font-medium text-gray-900">{product.name}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                    product.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                    product.status === 'Delivered' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  Last updated: {new Date().toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackingPage;