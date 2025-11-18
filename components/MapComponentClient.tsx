'use client';

import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet icons
if (typeof window !== 'undefined') {
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  });
}

interface MapComponentClientProps {
  height?: string;
  showPopup?: boolean;
}

const MapComponentClient: React.FC<MapComponentClientProps> = ({
  height = '300px',
  showPopup = true,
}) => {
  const melbournePosition: [number, number] = [-37.8136, 144.9631];

  const [mounted, setMounted] = useState(false);
  const [mapKey] = useState(() => `map-${Date.now()}-${Math.random()}`);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{ height, width: '100%' }}
        className="rounded-lg bg-gray-200 flex items-center justify-center shadow-lg"
      >
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div
      key={mapKey}
      style={{ height, width: '100%' }}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      <MapContainer
        key={mapKey} // ⭐ Forces a fresh Leaflet instance
        center={melbournePosition}
        zoom={12}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={melbournePosition}>
          {showPopup && (
            <Popup>
              <div className="text-center">
                <strong>Wipely HQ</strong><br />
                Melbourne, VIC, Australia<br />
                <span className="text-emerald-600">
                  Professional Cleaning Services
                </span>
              </div>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default React.memo(MapComponentClient);
