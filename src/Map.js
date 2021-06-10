import React from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"

const defaultCenter = [38.9072, -77.0369]
const defaultZoom = 8

const FlyTo = location => {
  const map = useMap()
  console.log(location.location.latitude)
  if (location.location.latitude) {
    map.flyTo([location.location.latitude, location.location.longitude], 14, {
      duration: 2
    })
    console.log(location)
    return (
      <Marker position={location.location.longitude ? [location.location.latitude, location.location.longitude] : defaultCenter}>
        <Popup>
          {`Latitude: ${location.location.latitude ? location.location.latitude : defaultCenter[0]},
           Longitude: ${location.location.longitude ? location.location.longitude : defaultCenter[1]},
           City: ${location.location.city},
           State: ${location.location.region},
           Zip Code: ${location.location.postal},
           Currency: ${location.location.currency_name}`}
        </Popup>
      </Marker>
    )
  } else {
    console.log("Error flying to location: " + location)
    return <Marker position={defaultCenter} />
  }
}

function Map(props) {
  return (
    <MapContainer center={defaultCenter} zoom={defaultZoom} zoomControl={false} scrollWheelZoom={true}>
      {console.log(props)}
      <FlyTo location={props.data} />
      <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  )
}

export default Map
