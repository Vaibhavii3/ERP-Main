import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, Upload, Camera } from 'lucide-react';

const QRScanner: React.FC = () => {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // In a real application, this would use a camera API to scan QR codes
  // For this demo, we'll simulate scanning by redirecting to a product
  const startScanning = () => {
    setScanning(true);
    setError(null);
    
    // Simulate scanning delay
    setTimeout(() => {
      // Redirect to a random product (in a real app, this would be the scanned product)
      const productIds = ['P001', 'P002', 'P003', 'P004', 'P005'];
      const randomProduct = productIds[Math.floor(Math.random() * productIds.length)];
      navigate(`/product/${randomProduct}`);
    }, 2000);
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would process the image to extract QR code
      // For this demo, we'll simulate by redirecting to a random product
      setScanning(true);
      setError(null);
      
      setTimeout(() => {
        const productIds = ['P001', 'P002', 'P003', 'P004', 'P005'];
        const randomProduct = productIds[Math.floor(Math.random() * productIds.length)];
        navigate(`/product/${randomProduct}`);
      }, 1500);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 bg-indigo-700 text-white">
            <h1 className="text-xl font-bold flex items-center">
              <QrCode className="h-6 w-6 mr-2" />
              QR Code Scanner
            </h1>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Scan a product QR code to view detailed tracking information and product journey.
            </p>
            
            {scanning ? (
              <div className="text-center py-10">
                <div className="animate-pulse flex flex-col items-center justify-center">
                  <QrCode className="h-16 w-16 text-indigo-500 mb-4" />
                  <p className="text-indigo-600 font-medium">Scanning...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="mx-auto flex flex-col items-center justify-center">
                    <Camera className="h-12 w-12 text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium text-gray-900">Use Camera</h3>
                    <p className="text-gray-500 text-sm mt-1 mb-4">
                      Scan QR code using your device camera
                    </p>
                    <button
                      type="button"
                      onClick={startScanning}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Start Scanning
                    </button>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-center text-sm text-gray-500 mb-4">OR</p>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <div className="mx-auto flex flex-col items-center justify-center">
                      <Upload className="h-12 w-12 text-gray-400 mb-3" />
                      <h3 className="text-lg font-medium text-gray-900">Upload Image</h3>
                      <p className="text-gray-500 text-sm mt-1 mb-4">
                        Upload an image containing a QR code
                      </p>
                      <label
                        htmlFor="file-upload"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Image
                      </label>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={handleFileUpload}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Click "Start Scanning" to activate your camera</li>
            <li>Point your camera at a product QR code</li>
            <li>Hold steady until the code is recognized</li>
            <li>View detailed product information and tracking history</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;