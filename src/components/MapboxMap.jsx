"use client";
import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Replace with your actual Mapbox access token
mapboxgl.accessToken = "pk.eyJ1Ijoic3JpamFuLXBpeGkiLCJhIjoiY21paWNxNDZpMG0wMDNlcHBmZ2hzdzgxYSJ9.SsRvEjSj4kCs7AYYhSH7sg";

export default function MapboxMap({ 
  latitude = 43.6532, 
  longitude = -79.3832, 
  zoom = 14,
  markerTitle = "Property Location"
}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [longitude, latitude],
      zoom: zoom,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add marker
    marker.current = new mapboxgl.Marker({ color: "#b49e79" })
      .setLngLat([longitude, latitude])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          `<h3 class="font-semibold">${markerTitle}</h3>`
        )
      )
      .addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [latitude, longitude, zoom, markerTitle]);

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-56 rounded-lg overflow-hidden"
      style={{ minHeight: "224px" }}
    />
  );
}

