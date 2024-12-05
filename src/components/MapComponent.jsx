import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = ({ locationData }) => {
  const mapRef = useRef(null); // Reference to the map container
  const mapInstance = useRef(null); // Reference to the map instance to check if it's already initialized
  const markerRef = useRef(null); // Reference to the marker so it can be updated

  useEffect(() => {
    const { location } = locationData;
    const { lat, lng } = location || {};

    if (lat && lng) {
      // Initialize the map if it hasn't been initialized yet
      if (!mapInstance.current) {
        // Initialize map and set the view
        mapInstance.current = L.map(mapRef.current).setView([lat, lng], 15);

        // Add tile layer to the map
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstance.current);
      }

      // If the marker is not initialized, add it
      if (!markerRef.current) {
        markerRef.current = L.marker([lat, lng]).addTo(mapInstance.current);
      } else {
        // Update the marker's position if the map already has a marker
        markerRef.current.setLatLng([lat, lng]);
      }

      // Update map view when location changes
      mapInstance.current.setView([lat, lng], 15); // Update map center to new location and zoom level
    }
  }, [locationData]); // Re-run whenever locationData changes

  return <div id="map" className="map h-100 z-2" ref={mapRef}></div>;
};

export default MapComponent;
