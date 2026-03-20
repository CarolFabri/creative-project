import React, { useMemo,useState } from "react";
import Globe from "react-globe.gl";

export default function GlobeSection() {
  const destinationAries = useMemo(
    () => [
      { name: "Queenstown", lat: -45.0312, lng: 168.6626, zodiac: "Aries" },
      { name: "Tokyo", lat: 35.6762, lng: 139.6503, zodiac: "Aries" },
      { name: "Rio de Janeiro", lat: -22.9068, lng: -43.1729, zodiac: "Aries" },
      { name: "Dubai", lat: 25.2048, lng: 55.2708, zodiac: "Aries" },
      { name: "Marrakech", lat: 31.6295, lng: -7.9811, zodiac: "Aries" },
      { name: "New York City", lat: 40.7128, lng: -74.006, zodiac: "Aries" },
      { name: "Reykjavík", lat: 64.1466, lng: -21.9426, zodiac: "Aries" },
      { name: "Cape Town", lat: -33.9249, lng: 18.4241, zodiac: "Aries" },
      { name: "Medellín", lat: 6.2442, lng: -75.5812, zodiac: "Aries" },
      { name: "Berlin", lat: 52.52, lng: 13.405, zodiac: "Aries" },
      { name: "Cusco", lat: -13.5319, lng: -71.9675, zodiac: "Aries" },
      { name: "Abu Dhabi", lat: 24.4539, lng: 54.3773, zodiac: "Aries" }
    ],
    []
  );

  const destinationTaurus = useMemo(
    () => [
      { name: "Tuscany", lat: 43.7711, lng: 11.2486, zodiac: "Taurus" },
      { name: "Bordeaux", lat: 44.8378, lng: -0.5792, zodiac: "Taurus" },
      { name: "Santorini", lat: 36.3932, lng: 25.4615, zodiac: "Taurus" },
      { name: "Interlaken", lat: 46.6863, lng: 7.8632, zodiac: "Taurus" },
      { name: "Kyoto", lat: 35.0116, lng: 135.7681, zodiac: "Taurus" },
      { name: "Algarve", lat: 37.0179, lng: -7.9307, zodiac: "Taurus" },
      { name: "Bruges", lat: 51.2093, lng: 3.2247, zodiac: "Taurus" },
      { name: "Mendoza", lat: -32.8895, lng: -68.8458, zodiac: "Taurus" },
      { name: "Cork", lat: 51.8985, lng: -8.4756, zodiac: "Taurus" },
      { name: "Maafushi", lat: 3.9423, lng: 73.4907, zodiac: "Taurus" },
      { name: "The Cotswolds", lat: 51.833, lng: -1.8433, zodiac: "Taurus" },
      { name: "Muscat", lat: 23.588, lng: 58.3829, zodiac: "Taurus" }
    ],
    []
  );

  const destinationGemini = useMemo(
    () => [
      { name: "Seville", lat: 37.3891, lng: -5.9845, zodiac: "Gemini" },
      { name: "Seoul", lat: 37.5665, lng: 126.978, zodiac: "Gemini" },
      { name: "London", lat: 51.5074, lng: -0.1278, zodiac: "Gemini" },
      { name: "Bangkok", lat: 13.7563, lng: 100.5018, zodiac: "Gemini" },
      { name: "Rome", lat: 41.9028, lng: 12.4964, zodiac: "Gemini" },
      { name: "Chicago", lat: 41.8781, lng: -87.6298, zodiac: "Gemini" },
      { name: "Istanbul", lat: 41.0082, lng: 28.9784, zodiac: "Gemini" },
      { name: "Budapest", lat: 47.4979, lng: 19.0402, zodiac: "Gemini" },
      { name: "Tbilisi", lat: 41.7151, lng: 44.8271, zodiac: "Gemini" },
      { name: "Melbourne", lat: -37.8136, lng: 144.9631, zodiac: "Gemini" },
      { name: "Singapore", lat: 1.3521, lng: 103.8198, zodiac: "Gemini" },
      { name: "Mexico City", lat: 19.4326, lng: -99.1332, zodiac: "Gemini" }
    ],
    []
  );

  const destinationCancer = useMemo(
    () => [
      { name: "Chania", lat: 35.5138, lng: 24.018, zodiac: "Cancer" },
      { name: "Venice", lat: 45.4408, lng: 12.3155, zodiac: "Cancer" },
      { name: "Hakone", lat: 35.2323, lng: 139.1069, zodiac: "Cancer" },
      { name: "Annecy", lat: 45.8992, lng: 6.1294, zodiac: "Cancer" },
      { name: "Victoria", lat: 48.4284, lng: -123.3656, zodiac: "Cancer" },
      { name: "Sintra", lat: 38.8029, lng: -9.3817, zodiac: "Cancer" },
      { name: "Hoi An", lat: 15.8801, lng: 108.338, zodiac: "Cancer" },
      { name: "Giethoorn", lat: 52.74, lng: 6.0792, zodiac: "Cancer" },
      { name: "St Ives", lat: 50.211, lng: -5.479, zodiac: "Cancer" },
      { name: "Dubrovnik", lat: 42.6507, lng: 18.0944, zodiac: "Cancer" },
      { name: "Charleston", lat: 32.7765, lng: -79.9311, zodiac: "Cancer" },
      { name: "Bergen", lat: 60.3913, lng: 5.3221, zodiac: "Cancer" }
    ],
    []
  );

  const destinationLeo = useMemo(
    () => [
      { name: "Cannes", lat: 43.5528, lng: 7.0174, zodiac: "Leo" },
      { name: "Positano", lat: 40.6281, lng: 14.4849, zodiac: "Leo" },
      { name: "Alexandria", lat: 31.2001, lng: 29.9187, zodiac: "Leo" },
      { name: "Los Angeles", lat: 34.0522, lng: -118.2437, zodiac: "Leo" },
      { name: "Las Vegas", lat: 36.1699, lng: -115.1398, zodiac: "Leo" },
      { name: "Monaco", lat: 43.7384, lng: 7.4246, zodiac: "Leo" },
      { name: "Ibiza", lat: 38.9067, lng: 1.4206, zodiac: "Leo" },
      { name: "Miami", lat: 25.7617, lng: -80.1918, zodiac: "Leo" },
      { name: "Nice", lat: 43.7102, lng: 7.262, zodiac: "Leo" },
      { name: "Barcelona", lat: 41.3851, lng: 2.1734, zodiac: "Leo" },
      { name: "Palm Springs", lat: 33.8303, lng: -116.5453, zodiac: "Leo" },
      { name: "Doha", lat: 25.2854, lng: 51.531, zodiac: "Leo" }
    ],
    []
  );

  const destinationVirgo = useMemo(
    () => [
      { name: "Zurich", lat: 47.3769, lng: 8.5417, zodiac: "Virgo" },
      { name: "Copenhagen", lat: 55.6761, lng: 12.5683, zodiac: "Virgo" },
      { name: "Ljubljana", lat: 46.0569, lng: 14.5058, zodiac: "Virgo" },
      { name: "Utrecht", lat: 52.0907, lng: 5.1214, zodiac: "Virgo" },
      { name: "Munich", lat: 48.1351, lng: 11.582, zodiac: "Virgo" },
      { name: "Aarhus", lat: 56.1629, lng: 10.2039, zodiac: "Virgo" },
      { name: "Wellington", lat: -41.2866, lng: 174.7756, zodiac: "Virgo" },
      { name: "Tallinn", lat: 59.437, lng: 24.7536, zodiac: "Virgo" },
      { name: "Quebec City", lat: 46.8139, lng: -71.208, zodiac: "Virgo" },
      { name: "Salzburg", lat: 47.8095, lng: 13.055, zodiac: "Virgo" },
      { name: "Ghent", lat: 51.0543, lng: 3.7174, zodiac: "Virgo" },
      { name: "Canberra", lat: -35.2809, lng: 149.13, zodiac: "Virgo" }
    ],
    []
  );

  const destinationLibra = useMemo(
    () => [
      { name: "Paris", lat: 48.8566, lng: 2.3522, zodiac: "Libra" },
      { name: "Vienna", lat: 48.2082, lng: 16.3738, zodiac: "Libra" },
      { name: "Prague", lat: 50.0755, lng: 14.4378, zodiac: "Libra" },
      { name: "Buenos Aires", lat: -34.6037, lng: -58.3816, zodiac: "Libra" },
      { name: "Lisbon", lat: 38.7223, lng: -9.1393, zodiac: "Libra" },
      { name: "Stockholm", lat: 59.3293, lng: 18.0686, zodiac: "Libra" },
      { name: "Milan", lat: 45.4642, lng: 9.19, zodiac: "Libra" },
      { name: "Brisbane", lat: -27.4698, lng: 153.0251, zodiac: "Libra" },
      { name: "Cartagena", lat: 10.391, lng: -75.4794, zodiac: "Libra" },
      { name: "San Sebastián", lat: 43.3183, lng: -1.9812, zodiac: "Libra" },
      { name: "Antwerp", lat: 51.2194, lng: 4.4025, zodiac: "Libra" },
      { name: "Riga", lat: 56.9496, lng: 24.1052, zodiac: "Libra" }
    ],
    []
  );

  const destinationScorpio = useMemo(
    () => [
      { name: "Edinburgh", lat: 55.9533, lng: -3.1883, zodiac: "Scorpio" },
      { name: "Kyiv", lat: 50.4501, lng: 30.5234, zodiac: "Scorpio" },
      { name: "Petra", lat: 30.3285, lng: 35.4444, zodiac: "Scorpio" },
      { name: "Salem", lat: 11.6643, lng: 78.146, zodiac: "Scorpio" },
      { name: "Havana", lat: 23.1136, lng: -82.3666, zodiac: "Scorpio" },
      { name: "Valletta", lat: 35.8989, lng: 14.5146, zodiac: "Scorpio" },
      { name: "Granada", lat: 37.1773, lng: -3.5986, zodiac: "Scorpio" },
      { name: "Jerusalem", lat: 31.7683, lng: 35.2137, zodiac: "Scorpio" },
      { name: "Lima", lat: -12.0464, lng: -77.0428, zodiac: "Scorpio" },
      { name: "Sarajevo", lat: 43.8563, lng: 18.4131, zodiac: "Scorpio" },
      { name: "Nairobi", lat: -1.2921, lng: 36.8219, zodiac: "Scorpio" },
      { name: "Kathmandu", lat: 27.7172, lng: 85.324, zodiac: "Scorpio" }
    ],
    []
  );

  const destinationSagittarius = useMemo(
    () => [
      { name: "Sydney", lat: -33.8688, lng: 151.2093, zodiac: "Sagittarius" },
      { name: "Vancouver", lat: 49.2827, lng: -123.1207, zodiac: "Sagittarius" },
      { name: "Auckland", lat: -36.8509, lng: 174.7645, zodiac: "Sagittarius" },
      { name: "San Diego", lat: 32.7157, lng: -117.1611, zodiac: "Sagittarius" },
      { name: "Buenos Aires Province", lat: -37.3217, lng: -59.1332, zodiac: "Sagittarius" },
      { name: "Mongolia - Ulaanbaatar", lat: 47.8864, lng: 106.9057, zodiac: "Sagittarius" },
      { name: "Lagos", lat: 6.5244, lng: 3.3792, zodiac: "Sagittarius" },
      { name: "Split", lat: 43.5081, lng: 16.4402, zodiac: "Sagittarius" },
      { name: "Santiago", lat: -33.4489, lng: -70.6693, zodiac: "Sagittarius" },
      { name: "Phuket", lat: 7.8804, lng: 98.3923, zodiac: "Sagittarius" },
      { name: "Mombasa", lat: -4.0435, lng: 39.6682, zodiac: "Sagittarius" },
      { name: "Banff", lat: 51.1784, lng: -115.5708, zodiac: "Sagittarius" }
    ],
    []
  );

  const destinationCapricorn = useMemo(
    () => [
      { name: "Geneva", lat: 46.2044, lng: 6.1432, zodiac: "Capricorn" },
      { name: "Oslo", lat: 59.9139, lng: 10.7522, zodiac: "Capricorn" },
      { name: "Frankfurt", lat: 50.1109, lng: 8.6821, zodiac: "Capricorn" },
      { name: "Helsinki", lat: 60.1699, lng: 24.9384, zodiac: "Capricorn" },
      { name: "Seattle", lat: 47.6062, lng: -122.3321, zodiac: "Capricorn" },
      { name: "Basel", lat: 47.5596, lng: 7.5886, zodiac: "Capricorn" },
      { name: "Innsbruck", lat: 47.2692, lng: 11.4041, zodiac: "Capricorn" },
      { name: "Luxembourg City", lat: 49.6116, lng: 6.1319, zodiac: "Capricorn" },
      { name: "Rotterdam", lat: 51.9244, lng: 4.4777, zodiac: "Capricorn" },
      { name: "Calgary", lat: 51.0447, lng: -114.0719, zodiac: "Capricorn" },
      { name: "Stuttgart", lat: 48.7758, lng: 9.1829, zodiac: "Capricorn" },
      { name: "Nagoya", lat: 35.1815, lng: 136.9066, zodiac: "Capricorn" }
    ],
    []
  );

  const destinationAquarius = useMemo(
    () => [
      { name: "Amsterdam", lat: 52.3676, lng: 4.9041, zodiac: "Aquarius" },
      { name: "San Francisco", lat: 37.7749, lng: -122.4194, zodiac: "Aquarius" },
      { name: "Berlin", lat: 52.52, lng: 13.405, zodiac: "Aquarius" },
      { name: "Toronto", lat: 43.6532, lng: -79.3832, zodiac: "Aquarius" },
      { name: "Tel Aviv", lat: 32.0853, lng: 34.7818, zodiac: "Aquarius" },
      { name: "Portland", lat: 45.5152, lng: -122.6784, zodiac: "Aquarius" },
      { name: "Bristol", lat: 51.4545, lng: -2.5879, zodiac: "Aquarius" },
      { name: "Bilbao", lat: 43.263, lng: -2.935, zodiac: "Aquarius" },
      { name: "Hobart", lat: -42.8821, lng: 147.3272, zodiac: "Aquarius" },
      { name: "Austin", lat: 30.2672, lng: -97.7431, zodiac: "Aquarius" },
      { name: "Reims", lat: 49.2583, lng: 4.0317, zodiac: "Aquarius" },
      { name: "Taipei", lat: 25.033, lng: 121.5654, zodiac: "Aquarius" }
    ],
    []
  );

  const destinationPisces = useMemo(
    () => [
      { name: "Ubud", lat: -8.5069, lng: 115.2625, zodiac: "Pisces" },
      { name: "Maui", lat: 20.7984, lng: -156.3319, zodiac: "Pisces" },
      { name: "Chefchaouen", lat: 35.1688, lng: -5.2636, zodiac: "Pisces" },
      { name: "Funchal", lat: 32.6669, lng: -16.9241, zodiac: "Pisces" },
      { name: "Byron Bay", lat: -28.6474, lng: 153.602, zodiac: "Pisces" },
      { name: "Kotor", lat: 42.4247, lng: 18.7712, zodiac: "Pisces" },
      { name: "Bora Bora", lat: -16.5004, lng: -151.7415, zodiac: "Pisces" },
      { name: "Essaouira", lat: 31.5085, lng: -9.7595, zodiac: "Pisces" },
      { name: "Lake Bled", lat: 46.3625, lng: 14.0938, zodiac: "Pisces" },
      { name: "Siena", lat: 43.3188, lng: 11.3308, zodiac: "Pisces" },
      { name: "Luang Prabang", lat: 19.8856, lng: 102.135, zodiac: "Pisces" },
      { name: "Galway", lat: 53.2707, lng: -9.0568, zodiac: "Pisces" }
    ],
    []
  );

  const allDestinations = useMemo(
    () => [
      ...destinationAries,
      ...destinationTaurus,
      ...destinationGemini,
      ...destinationCancer,
      ...destinationLeo,
      ...destinationVirgo,
      ...destinationLibra,
      ...destinationScorpio,
      ...destinationSagittarius,
      ...destinationCapricorn,
      ...destinationAquarius,
      ...destinationPisces
    ],
    [
      destinationAries,
      destinationTaurus,
      destinationGemini,
      destinationCancer,
      destinationLeo,
      destinationVirgo,
      destinationLibra,
      destinationScorpio,
      destinationSagittarius,
      destinationCapricorn,
      destinationAquarius,
      destinationPisces
    ]
  );
  const sign = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
  ]

const [signSelection, setSignSelection] = useState("Aries");
 function signSelectionHandler(event) {
    setSignSelection(event.target.value);
  } 
let filteredDestinations = [];
if (signSelection === "Aries"){
  filteredDestinations = destinationAries; 
} else if (signSelection === "Taurus"){
  filteredDestinations = destinationTaurus; 
} else if (signSelection === "Gemini"){
  filteredDestinations = destinationGemini; 
} else if (signSelection === "Cancer"){
  filteredDestinations = destinationCancer; 
} else if (signSelection === "Leo"){
  filteredDestinations = destinationLeo; 
} else if (signSelection === "Virgo"){
  filteredDestinations = destinationVirgo; 
} else if (signSelection === "Libra"){
  filteredDestinations = destinationLibra; 
} else if (signSelection === "Scorpio"){
  filteredDestinations = destinationScorpio; 
} else if (signSelection === "Sagittarius"){
  filteredDestinations = destinationSagittarius; 
} else if (signSelection === "Capricorn"){
  filteredDestinations = destinationCapricorn; 
} else if (signSelection === "Aquarius"){
  filteredDestinations = destinationAquarius;
  } else if (signSelection === "Pisces") {
  filteredDestinations = destinationPisces;
}

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#0b1020",
        color: "white",
        padding: "20px"
      }}
    >
      <h1>Select your zodiac sign</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
        <button value="Aries" onClick={signSelectionHandler}>Aries</button>
        <button value="Taurus" onClick={signSelectionHandler}>Taurus</button>
        <button value="Gemini" onClick={signSelectionHandler}>Gemini</button>
        <button value="Cancer" onClick={signSelectionHandler}>Cancer</button>
        <button value="Leo" onClick={signSelectionHandler}>Leo</button>
        <button value="Virgo" onClick={signSelectionHandler}>Virgo</button>
        <button value="Libra" onClick={signSelectionHandler}>Libra</button>
        <button value="Scorpio" onClick={signSelectionHandler}>Scorpio</button>
        <button value="Sagittarius" onClick={signSelectionHandler}>Sagittarius</button>
        <button value="Capricorn" onClick={signSelectionHandler}>Capricorn</button>
        <button value="Aquarius" onClick={signSelectionHandler}>Aquarius</button>
        <button value="Pisces" onClick={signSelectionHandler}>Pisces</button>
      </div>
<div>
      <h2>Selected sign: {signSelection}</h2>

    </div>
           <Globe
        width={window.innerWidth}
        height={window.innerHeight}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        pointsData ={filteredDestinations}
        pointLat="lat"
        pointLng="lng"
        pointLabel={(d) => `${d.name} — Best for ${d.zodiac}`}
        pointAltitude={0.03}
        pointRadius={0.15}
        labelsData={filteredDestinations}
        labelLat="lat"
        labelLng="lng"
        labelText="name"
        labelSize={1.2}
        labelDotRadius={0.25}

      />
    </div>
  );
}