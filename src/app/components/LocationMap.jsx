// "use client";
import React from "react";
// import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  return (
    <iframe
      title="lokasi rumah japanese tropical parkspring gading"
      id="location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.7359289976336!2d106.92127269999999!3d-6.1382642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b4b9603ce09%3A0x59fc4ef52aed488c!2sMarketing%20Gallery%20PARKSPRING%20Gading!5e0!3m2!1sen!2sid!4v1782959428760!5m2!1sen!2sid"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      className="w-full h-[350px] scroll-mt-32"
    ></iframe>
    // <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <CircleMarker
    //     center={[51.505, -0.09]}
    //     radius={10}
    //     color="transparent"
    //     fillColor="green"
    //     opacity={0.5}
    //   >
    //     <Popup>
    //       A pretty CSS3 popup. <br /> Easily customizable.
    //     </Popup>
    //   </CircleMarker>
    // </MapContainer>
  );
};

export default LocationMap;
