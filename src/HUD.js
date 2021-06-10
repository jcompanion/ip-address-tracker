import React from "react"

export default function HUD(props) {
  return (
    <div className="hud">
      <div className="box">
        <span className="title">IP ADDRESS</span>
        <h5 className="output">{props.data.query ? props.data.query : "Search without typing for your IP"}</h5>
      </div>
      <div className="box">
        <span className="title">LOCATION</span>
        <h5 className="output">
          {props.data.city
            ? `${props.data.city},
         ${props.data.region}`
            : "Click search button for your location"}
        </h5>
      </div>
      <div className="box">
        <span className="title">TIMEZONE</span>
        <h5 className="output">{props.data.timezone}</h5>
      </div>
      <div className="box">
        <span className="title">ISP</span>
        <h5 className="output">{props.data.isp}</h5>
      </div>
    </div>
  )
}
