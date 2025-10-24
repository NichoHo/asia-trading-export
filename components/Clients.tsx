"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { MapPin, Globe2 } from "lucide-react";

const geoUrl = "/world-110m.json";

const markers = [
  { name: "Canada", coordinates: [-106.3468, 56.1304], region: "North America" },
  { name: "United Kingdom", coordinates: [-3.436, 55.3781], region: "Europe" },
  { name: "Denmark", coordinates: [9.5018, 56.2639], region: "Europe" },
  { name: "Russia", coordinates: [105.3188, 61.524], region: "Europe/Asia" },
  { name: "Lebanon", coordinates: [35.8623, 33.8547], region: "Middle East" },
  { name: "Jordan", coordinates: [36.2384, 30.5852], region: "Middle East" },
  { name: "Iraq", coordinates: [43.6793, 33.2232], region: "Middle East" },
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859], region: "Middle East" },
  { name: "Yemen", coordinates: [48.5164, 15.5527], region: "Middle East" },
];

export default function Clients() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <section
      id="clients"
      className="py-20 bg-white dark:bg-neutral-surface-dark transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-text dark:text-neutral-text-dark mb-4">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent dark:from-primary-dark dark:to-accent-dark mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-neutral-subtext dark:text-neutral-subtext-dark max-w-2xl mx-auto">
            We proudly export our premium wood charcoal to partners and clients across the globe
          </p>
        </div>

        {/* Map and Client List Container */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2 bg-gradient-to-br from-neutral-light to-white dark:from-neutral-dark dark:to-neutral-surface-dark rounded-2xl p-6 shadow-xl border border-neutral-border dark:border-neutral-border-dark">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-semibold text-neutral-text dark:text-neutral-text-dark">
                Our Global Reach
              </h3>
            </div>

            <div className="relative w-full h-[400px] md:h-[500px] bg-white dark:bg-neutral-surface-dark rounded-xl overflow-hidden border-2 border-neutral-border dark:border-neutral-border-dark">
              <ComposableMap
                projectionConfig={{ scale: 147 }}
                className="w-full h-full"
              >
                <ZoomableGroup center={[20, 10]} zoom={1.3}>
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill="#F8FAFC"
                          stroke="#E2E8F0"
                          className="dark:fill-neutral-dark dark:stroke-neutral-border-dark outline-none transition-colors duration-300"
                          style={{
                            default: { outline: "none" },
                            hover: {
                              fill: "#CBD5E1",
                              outline: "none",
                            },
                            pressed: {
                              fill: "#94A3B8",
                              outline: "none",
                            },
                          }}
                        />
                      ))
                    }
                  </Geographies>

                  {/* Client Markers */}
                  {markers.map((marker) => (
                    <Marker key={marker.name} coordinates={marker.coordinates}>
                      <g
                        onMouseEnter={() => setHoveredCountry(marker.name)}
                        onMouseLeave={() => setHoveredCountry(null)}
                        onClick={() => setSelectedCountry(marker.name)}
                        className="cursor-pointer"
                      >
                        <circle
                          r={selectedCountry === marker.name ? 10 : 7}
                          fill={
                            selectedCountry === marker.name || hoveredCountry === marker.name
                              ? "#D62828"
                              : "#004AAD"
                          }
                          stroke="white"
                          strokeWidth={2}
                          className="transition-all duration-300"
                          style={{
                            filter: selectedCountry === marker.name
                              ? "drop-shadow(0 4px 8px rgba(214, 40, 40, 0.5))"
                              : "drop-shadow(0 2px 4px rgba(0, 74, 173, 0.3))",
                          }}
                        />
                        {(selectedCountry === marker.name || hoveredCountry === marker.name) && (
                          <circle
                            r={15}
                            fill="none"
                            stroke="#D62828"
                            strokeWidth={2}
                            opacity={0.3}
                            className="animate-ping"
                          />
                        )}
                      </g>
                    </Marker>
                  ))}
                </ZoomableGroup>
              </ComposableMap>

              {/* Hover/Selected Info Overlay */}
              {(selectedCountry || hoveredCountry) && (
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-neutral-surface-dark/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-neutral-border dark:border-neutral-border-dark animate-in slide-in-from-bottom-2 duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light dark:from-secondary-dark dark:to-secondary-light rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-neutral-text dark:text-neutral-text-dark">
                        {selectedCountry || hoveredCountry}
                      </h4>
                      <p className="text-sm text-neutral-subtext dark:text-neutral-subtext-dark">
                        {markers.find((m) => m.name === (selectedCountry || hoveredCountry))?.region}
                      </p>
                    </div>
                    {selectedCountry && (
                      <button
                        onClick={() => setSelectedCountry(null)}
                        className="ml-auto text-xs px-3 py-1 rounded-lg bg-neutral-light dark:bg-neutral-dark text-neutral-text dark:text-neutral-text-dark hover:bg-neutral-border dark:hover:bg-neutral-border-dark transition-colors"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            <p className="text-center text-sm text-neutral-subtext dark:text-neutral-subtext-dark mt-4 italic">
              Click on markers to view details • Pan and zoom to explore
            </p>
          </div>

          {/* Client List */}
          <div className="bg-gradient-to-br from-neutral-light to-white dark:from-neutral-dark dark:to-neutral-surface-dark rounded-2xl p-6 shadow-xl border border-neutral-border dark:border-neutral-border-dark">
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-semibold text-neutral-text dark:text-neutral-text-dark">
                Client Countries
              </h3>
            </div>

            <div className="space-y-3 max-h-[550px] overflow-y-auto pr-2">
              {markers.map((marker, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCountry(marker.name)}
                  onMouseEnter={() => setHoveredCountry(marker.name)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                    selectedCountry === marker.name
                        ? "bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary-dark/20 dark:to-accent-dark/20 border-primary dark:border-primary-dark"
                        : hoveredCountry === marker.name
                        ? "bg-neutral-light dark:bg-neutral-surface-dark border-neutral-border dark:border-neutral-border-dark shadow-md scale-102"
                        : "bg-white dark:bg-neutral-surface-dark border-neutral-border dark:border-neutral-border-dark hover:shadow-md hover:scale-102"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full flex-shrink-0 ${
                        selectedCountry === marker.name
                          ? "bg-secondary dark:bg-secondary-dark animate-pulse"
                          : "bg-primary dark:bg-primary-dark"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <div className="font-semibold text-neutral-text dark:text-neutral-text-dark">
                        {marker.name}
                      </div>
                      <div className="text-xs text-neutral-subtext dark:text-neutral-subtext-dark mt-1">
                        {marker.region}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}