import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Coverage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();

  console.log(serviceCenters);
  return (
    <div className="bg-white rounded-4xl p-20">
      <div>
        <h1 className="text-[#03373D] text-5xl font-extrabold">
          We are available in 64 districts
        </h1>
        <div className="relative mt-10 mb-20">
          <form>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search here"
              className="bg-[#F0F3F6] px-12 py-4 w-[30%] rounded-[50px]"
            />
            <button className="text-xl font-bold bg-primary py-3 px-6 rounded-[50px] absolute top-[1px] left-91">
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-extrabold text-[#03373D]">
          We deliver almost all over Bangladesh
        </h2>
        <div className="w-full h-[800px] mt-10">
          <MapContainer
            center={position}
            zoom={8}
            scrollWheelZoom={false}
            className="h-[800px]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {serviceCenters.map((center,index) => (
              <Marker position={[center.latitude, center.longitude]} key={index}>
                <Popup>
                  <strong>{center.district}</strong> <br /> Service Area : {center.covered_area.join(', ')}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Coverage;
