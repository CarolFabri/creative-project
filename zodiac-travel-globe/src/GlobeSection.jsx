import React, { useMemo } from "react";
import Globe from "react-globe.gl";

export default function GlobeSection() {
  const destinations = useMemo(() => [
    { name: "Paris", lat: 48.8566, lng: 2.3522, zodiac: "Libra" },
    { name: "Tokyo", lat: 35.6762, lng: 139.6503, zodiac: "Aries" },
    { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, zodiac: "Leo" }
  ], []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#0b1020"
      }}
    >
      <Globe
        width={window.innerWidth}
        height={window.innerHeight}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData={destinations}
        pointLat="lat"
        pointLng="lng"
        pointLabel={(d) => `${d.name} — Best for ${d.zodiac}`}
        pointAltitude={0.03}
        pointRadius={0.5}
      />
    </div>
  );
}