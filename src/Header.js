import React from "react"
import HUD from "./HUD"
import Map from "./Map"
import { IoIosArrowForward } from "react-icons/io"
import axios from "axios"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ip: "", data: [] }
  }
  mySubmitHandler = event => {
    event.preventDefault()
    this.getIpLocation()
  }
  myChangeHandler = event => {
    this.setState({ ip: event.target.value })
    console.log(this.state.ip)
  }

  getIpLocation = () => {
    axios.get("https://ipapi.co/" + this.state.ip + "/json/").then(res => this.setState({ data: res.data }))
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>IP Address Tracker</h1>
          <div className="search-bar">
            <form onSubmit={this.mySubmitHandler}>
              <input onChange={this.myChangeHandler} type="text" className="search" placeholder="Search for any IP address" />
              <button className="submit">
                <IoIosArrowForward />
              </button>
            </form>
          </div>
          <HUD data={this.state.data} />
        </div>
        <Map data={this.state.data} />
      </div>
    )
  }
}
