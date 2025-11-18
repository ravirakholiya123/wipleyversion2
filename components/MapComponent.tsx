'use client';

import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

interface MapComponentProps {
  height?: string;
  showPopup?: boolean;
}

const DynamicMap = dynamic(
  () => import('./MapComponentClient'),
  { 
    ssr: false,
    loading: () => (
      <div 
        style={{ height: '300px', width: '100%', maxWidth: '100%' }} 
        className="rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center"
      >
        <p className="text-gray-500">Loading map...</p>
      </div>
    )
  }
);

const MapComponent: React.FC<MapComponentProps> = ({ height = "300px", showPopup = true }) => {
  const [isClient, setIsClient] = useState(false);
  const keyRef = useRef(`map-${Math.random().toString(36).substring(7)}`);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        style={{ height, width: '100%', maxWidth: '100%' }} 
        className="rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center"
      >
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return <DynamicMap key={keyRef.current} height={height} showPopup={showPopup} />;
};

export default MapComponent;
