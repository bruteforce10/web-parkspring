"use client";
import React from "react";
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  return (
    // <iframe
    //   id="location"
    //   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.94392149935!2d106.9191605!3d-6.1382366!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b3dbfb01dc7%3A0x459f2f75bee3312e!2sPARKSPRING%20Gading!5e0!3m2!1sen!2sid!4v1716831196775!5m2!1sen!2sid"
    //   className="w-full h-[350px] scroll-mt-32"
    //   allowfullscreen=""
    //   loading="lazy"
    //   referrerpolicy="no-referrer-when-downgrade"
    // ></iframe>
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker
        center={[51.505, -0.09]}
        radius={10}
        color="transparent"
        fillColor="green"
        opacity={0.5}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
};

export default LocationMap;
