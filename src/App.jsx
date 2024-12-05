import { useEffect, useState } from "react";
import Input from "./components/Input"
import MapComponent from "./components/MapComponent";
import Output from "./components/Output"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";

function App() {

  const [ipAddress, setIpAddress] = useState('')
  const [searchIp, setSearchIp] = useState('')
  const [locationData, setLocationData] = useState('')
  const [error, setError] = useState('')

  // Getting the ip addrees of user
  const getIp = (ip) => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => {
        setIpAddress(response.data.ip)
        fetchIpData(ipAddress)
      })
      .catch((error) => {
        console.error("Error fetching on load:", error)
        setError('Could not fetch ip address')
      })
  }

  //Getting data of the ip address
  const fetchIpData = (ip) => {
    const apiKey = import.meta.env.VITE_REACT_APP_MAP_API_KEY;
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
    axios
      .get(url)
      .then((response) => {
        setLocationData(response.data)
        console.log(locationData)
      })
      .catch((error) => {
        console.error("Error fetching data of ip:", error)
        setError('Could not fetch data of ip')
      })
  }

  // Handle form submit
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (searchIp == '') {
      getIp()
    }
    if (searchIp.trim()) {
      fetchIpData(searchIp)
    }
  }

  // Getting the ip addrees of user when page loads
  useEffect(() => {
    getIp()
  }, [])

  return (
    <div className="d-flex flex-column h-100">
      <div className="top-component">
        <div className="container">
          <div className="py-4">
            <div className="row justify-content-center">
              <div className="col-11 col-md-11 col-xl-12">
                <Input handleFormSubmit={handleFormSubmit} searchIp={searchIp} setSearchIp={setSearchIp} />
                <Output locationData={locationData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-component h-100 overflow-hidden">
        <MapComponent locationData={locationData} />
      </div>
    </div>
  )
}

export default App
