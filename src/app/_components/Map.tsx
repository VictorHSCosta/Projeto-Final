"use client"

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

type options = {
    position?: [
        latitude: number,
        longitude: number
    ],
    zoom?: number,
    height?: string,
    width?: string,
    className?: string
}

export default ({position = [51.505, -0.09], zoom = 13, height = "30vh", width = "30vw", className}: options) => { return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{minHeight: height, minWidth: width}} className={className}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
        <Popup>
            <b>Sebinho</b><br />
            livros
        </Popup>
        </Marker>
    </MapContainer>
)}