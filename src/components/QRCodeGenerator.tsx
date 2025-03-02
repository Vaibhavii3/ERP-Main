import React from 'react';
import QRCode from 'react-qr-code';
import { Product } from '../types';

interface QRCodeGeneratorProps {
  product: Product;
  size?: number;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ product, size = 128 }) => {
  // Create a URL that contains the product ID
  const productUrl = `${window.location.origin}/product/${product.id}`;
  
  return (
    <div className="flex flex-col items-center">
      <div className="bg-white p-3 rounded-lg shadow-md">
        <QRCode value={productUrl} size={size} />
      </div>
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">Scan to track product</p>
        <p className="text-xs text-gray-500">{product.id}</p>
      </div>
    </div>
  );
};

export default QRCodeGenerator;