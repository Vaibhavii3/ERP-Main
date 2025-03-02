import React from 'react';
import { TrackingEvent } from '../types';
import { CheckCircle, Truck, Package, ShoppingBag, Warehouse } from 'lucide-react';

interface TrackingTimelineProps {
  events: TrackingEvent[];
}

const TrackingTimeline: React.FC<TrackingTimelineProps> = ({ events }) => {
  const getEventIcon = (action: string) => {
    switch (action) {
      case 'Procured':
        return <ShoppingBag className="h-5 w-5 text-indigo-600" />;
      case 'Stored':
        return <Warehouse className="h-5 w-5 text-blue-600" />;
      case 'Shipped':
        return <Truck className="h-5 w-5 text-orange-600" />;
      case 'Received':
        return <Package className="h-5 w-5 text-green-600" />;
      case 'Sold':
        return <CheckCircle className="h-5 w-5 text-purple-600" />;
      default:
        return <Package className="h-5 w-5 text-gray-600" />;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  // Sort events by timestamp (oldest first)
  const sortedEvents = [...events].sort((a, b) => 
    new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );

  return (
    <div className="flow-root">
      <ul className="-mb-8">
        {sortedEvents.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== sortedEvents.length - 1 ? (
                <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
              ) : null}
              <div className="relative flex items-start space-x-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center ring-8 ring-white">
                    {getEventIcon(event.action)}
                  </div>
                </div>
                <div className="min-w-0 flex-1 py-1.5">
                  <div className="text-sm text-gray-500">
                    <div className="font-medium text-gray-900">{event.action}</div>
                    <div className="mt-1 flex items-center">
                      <span className="text-xs font-medium text-gray-500">
                        {formatDate(event.timestamp)}
                      </span>
                    </div>
                    <div className="mt-1">
                      <p className="text-sm text-gray-700">{event.notes}</p>
                    </div>
                    <div className="mt-1">
                      <p className="text-xs text-gray-500">Location: {event.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackingTimeline;