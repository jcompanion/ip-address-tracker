import React from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"

const defaultCenter = [38.9072, -77.0369]
const defaultZoom = 8

function FlyTo(data) {
  const map = useMap()
  if (data.data.query) {
    map.flyTo([data.data.lat, data.data.lon], 14, {
      duration: 2
    })
    console.log(data)
    return (
      <Marker position={data.data.lon ? [data.data.lat, data.data.lon] : defaultCenter}>
        <Popup>{`Latitude: ${data.data.lat ? data.data.lat : defaultCenter[0]}, Longitude: ${data.data.lon ? data.data.lon : defaultCenter[1]}`}</Popup>
      </Marker>
    )
  } else {
    console.log("Error flying to location: " + data)
    return <Marker position={defaultCenter} />
  }
}

function Map(props) {
  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom} zoomControl={false} scrollWheelZoom={true}>
      <FlyTo data={props.data} />
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
}

export default Map
