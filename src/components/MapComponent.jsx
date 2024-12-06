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
        mapInstance.current = L.map(mapRef.current).setView([lat, lng], 15);
  
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstance.current);
      }
  
      // Define a custom icon
      const customIcon = L.icon({
        iconUrl: 'src/assets/images/icon-location.svg', // Replace with the path to your custom icon
        iconSize: [29, 38], // Set size of the icon
        iconAnchor: [16, 32], // Anchor the icon to the marker's position
        popupAnchor: [0, -32], // Optional: Adjust popup position
      });
  
      // If the marker is not initialized, add it with the custom icon
      if (!markerRef.current) {
        markerRef.current = L.marker([lat, lng], { icon: customIcon }).addTo(mapInstance.current);
      } else {
        // Update the marker's position and icon if the map already has a marker
        markerRef.current.setLatLng([lat, lng]);
        markerRef.current.setIcon(customIcon);
      }
  
      mapInstance.current.setView([lat, lng], 15);
    }
  }, [locationData]);

  return <div id="map" className="map h-100 z-2" ref={mapRef}></div>;
};

export default MapComponent;
