import React from 'react';
import { Link } from 'react-router-dom';
import { Package, BarChart2, Truck, QrCode, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8" />
              <span className="font-bold text-xl">QMart</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
                <Home className="h-4 w-4 mr-1" />
                Dashboard
              </Link>
              <Link to="/products" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
                <Package className="h-4 w-4 mr-1" />
                Products
              </Link>
              <Link to="/tracking" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
                <Truck className="h-4 w-4 mr-1" />
                Tracking
              </Link>
              <Link to="/qr-scanner" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
                <QrCode className="h-4 w-4 mr-1" />
                QR Scanner
              </Link>
              <Link to="/analytics" className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-600">
                <BarChart2 className="h-4 w-4 mr-1" />
                Analytics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;