import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define container style for the map
const containerStyle = { width: "100%", height: "500px" };

// Default location (Delhi)
const defaultCenter = { lat: 28.6139, lng: 77.209 };

const MedicalStore = () => {
  const [center, setCenter] = useState(defaultCenter);
  const [stores, setStores] = useState([]);
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);

  // Check if Google Maps script is loaded
  useEffect(() => {
    if (window.google) {
      setGoogleMapsLoaded(true);
    }
  }, []);

  const handleFindStores = () => {
    if (!navigator.geolocation) return alert("Geolocation not supported");

    // Ask for the current location
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      setCenter({ lat, lng });

      if (googleMapsLoaded) {
        // Initialize the Google Places service only after the API is loaded
        const map = new window.google.maps.Map(document.createElement("div"));
        const service = new window.google.maps.places.PlacesService(map);
        console.log("Service:", service);

        // Create a location object from the latitude and longitude
        const location = new window.google.maps.LatLng(lat, lng);

        // Use the Places API to find nearby medical stores (pharmacies)
        const request = {
          location,
          radius: 5000, // 5 km radius
          type: ["pharmacy"], // You can change this to other types like 'hospital' or 'doctor'
        };

        service.nearbySearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setStores(results); // Set the stores to be displayed on the map
          } else {
            alert("No nearby medical stores found.");
          }
        });
      }
    });
  };

  return (
    <div>
      {/* Button to trigger finding nearby stores */}
      <button
        onClick={handleFindStores}
        className="bg-blue-500 text-white px-4 py-2 rounded m-4"
      >
        Find Nearby Medical Stores
      </button>

      {/* Embed the Google Map  */}
      <LoadScript googleMapsApiKey="Google API Key">       ////////////////////////////////////////////////////
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        /* Render markers for each store */
          {stores.map((store, idx) => (
            <Marker
              key={idx}
              position={{
                lat: store.geometry.location.lat(),
                lng: store.geometry.location.lng(),
              }}
              title={store.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>

    </div>
  );
};

export default MedicalStore;
