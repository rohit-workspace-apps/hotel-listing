import React from "react"
import HotelList from "./components/HotelList"

const App = () => {
  return (
    <div style={{ backgroundColor: "#69c5f0" }} className="App">
      <h2 style={{ marginLeft: "600px", color: "#873e23" }}>Hotel Listing</h2>
      <HotelList />
    </div>
  )
}

export default App
