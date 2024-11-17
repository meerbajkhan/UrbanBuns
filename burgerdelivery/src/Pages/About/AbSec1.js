// App.js
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./AboutSection.css";
import shopsImage from '../About/shop.webp'

// Styles for the map container
const containerStyle = {
  width: "100%",
  height: "300px",
};

// Map center coordinates
const center = {
  lat: 23.5451, // Example: Latitude of San Francisco
  lng: 74.4405, // Example: Longitude of San Francisco
};

function AbSec1() {
  return (
    <div>
        <div className="about-section">
      <div className="about-text">
        <h2>About UrbanBuns</h2>
        <p>
          Welcome to <strong>UrbanBuns</strong>, where every bite tells a story
          of flavor and freshness. Nestled in the heart of the city, UrbanBuns
          is more than just a burger shop—it's a celebration of gourmet
          craftsmanship.
        </p>
        <p>
          Our journey began with a simple vision: to redefine how burgers are
          made and enjoyed. We blend the finest ingredients, innovative recipes,
          and a dash of urban vibe to create burgers that are as unique as our
          name. From juicy, hand-pressed patties to freshly baked buns, every
          element is crafted with care and passion.
        </p>
        <p>
          <strong>Why Choose UrbanBuns?</strong>
        </p>
        <ul>
          <li><strong>Premium Quality:</strong> We source only the freshest, locally-grown ingredients.</li>
          <li><strong>Innovative Menu:</strong> From classic favorites to bold new flavors, there's something for everyone.</li>
          <li><strong>Eco-Friendly Approach:</strong> We’re committed to sustainability, with eco-conscious packaging and waste management.</li>
          <li><strong>Urban Vibe:</strong> A trendy space that’s perfect for hanging out or grabbing a quick bite.</li>
        </ul>
      </div>
      <div className="about-image">
        <img
          src={shopsImage}
          alt="UrbanBuns shop"
        />
      </div>
    </div>




      {/* <h1>Google Maps Integration</h1> */}
      <LoadScript googleMapsApiKey=" AIzaSyB0eTOhgkeMPhm2ZObxmfg1KjmPjXDJyV0">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Add a marker */}
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default AbSec1;





// AIzaSyB0eTOhgkeMPhm2ZObxmfg1KjmPjXDJyV0

