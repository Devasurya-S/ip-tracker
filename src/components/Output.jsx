import React, { useState, useEffect } from 'react';
import Result from '../components/Result';

const Output = ({ locationData }) => {
  // Use state to store values
  const [ipAddress, setIpAddress] = useState('N/A');
  const [cityName, setCityName] = useState('N/A');
  const [timezoneInfo, setTimezoneInfo] = useState('N/A');
  const [ispName, setIspName] = useState('N/A');

  useEffect(() => {
    // Destructure the locationData object
    const { ip, location, as } = locationData;

    // Safely destructure the location object, if location is available
    if (location) {
      const { city, timezone } = location;
      setCityName(city || 'N/A');
      setTimezoneInfo(timezone || 'N/A');
    }

    // Update the other state values
    setIpAddress(ip || 'N/A');
    setIspName(as?.name || 'N/A');
  }, [locationData]);

  return (
    <div className='bg-white px-3 py-3 px-md-3 py-md-4 rounded-3'>
      <div className="row g-0 justify-content-md-between">
        <div className="col-6 col-md-3 border-end mt-md-0">
          <div>
            <Result label={"ip address"} dataItem={ipAddress} />
          </div>
        </div>
        <div className="col-6 col-md-3 border-end mt-md-0">
          <div className="ps-md-4">
            <Result label={"location"} dataItem={cityName} />
          </div>
        </div>
        <div className="col-6 col-md-3 border-end mt-3 mt-md-0">
        <div className="ps-md-4">
          <Result label={"timezone"} type={"UTC"} dataItem={timezoneInfo} />
        </div>
        </div>
        <div className="col-6 col-md-3 mt-3 mt-md-0">
        <div className="ps-md-4">
          <Result label={"isp"} dataItem={ispName} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Output;
