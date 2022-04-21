import React, { useEffect, useState } from "react";
import { TextField, Button, Input, FormLabel } from "@mui/material";
// import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
//import DateTimePicker from '@mui/material';
import "./App.css";

const Punchin = () => {

  const [date, setDate] = useState("");
  const [loadNumber, setLoadNumber] = useState("");
  const [loadNumberError,setLoadNumberError] = useState("")
  const [feeError,setFeeError] = useState("")
  const [rateError,setRateError] = useState("")
  const [carrierRate, setCarrierRate] = useState("");
  const [carrierFee, setCarrierFee] = useState("");
  const [carrierNetPay,setCarrierNetPay] = useState("")
  const [brokerData, setBrokerData] = useState({
    dispatchName: "",
    phone: "",
    email: "",
  });

  const [carrierData, setCarrierData] = useState({
    companyName: "",
    email: "",
    phone: "",
    dispatchName: "",
  });

  const [shipperData, setShipperData] = useState({
    warehouseName: "",
    address: "",
    city: "",
    state: "",
    country: "United States",
    zipcode: "",
    earliestTime: "",
    latestTime: "",
  });
  const [receiverData, setReceiverData] = useState({
    warehouseName: "",
    address: "",
    city: "",
    state: "",
    country: "United States",
    zipcode: "",
    earliestTime: "",
    latestTime: "",
  });

  const handleReceiverChange = (e) => {
    const { name, value } = e.target;
    setReceiverData({
      ...receiverData,
      [name]: value,
    });
  };

  const handleShipperChange = (e) => {
    const { name, value } = e.target;
    setShipperData({
      ...shipperData,
      [name]: value,
    });
  };
  
  const handleCarrierChange = (e) => {
    const { name, value } = e.target;
    setCarrierData({
      ...carrierData,
      [name]: value,
    });
  };
  const handleBrokerChange = (e) => {
    const { name, value } = e.target;
    setBrokerData({
      ...brokerData,
      [name]: value,
    });
  };
  
   useEffect(() => {
    if (!/[0-9]/.test(loadNumber)){
      setLoadNumberError("Must Contain Number!");
    }
    if(/[0-9]/.test(loadNumber)){
      setLoadNumberError("")
    }
    if(!/[0-9]/.test(carrierFee)){
      setFeeError("Must Contain Number!")
    }
    if(/[0-9]/.test(carrierFee)){
      setFeeError("")
    }
    if(!/[0-9]/.test(carrierRate)){
      setRateError("Must Contain Number!")
    }
    if (/[0-9]/.test(carrierRate)){
      setRateError("")
    }
  }, [loadNumber,carrierFee,carrierRate,]);


  function NetPayCalculator() {
    let x = carrierRate - (carrierRate * carrierFee) / 100;
    setCarrierNetPay(x);
    return (
      <div>
        <TextField label="Net Pay" value={carrierNetPay} />
      </div>
    );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.title = loadNumber;
  },[loadNumber])

  return (
    <div>
      <form onSubmit={handleSubmit} className="main-reg">
        <div className="data-selector">
          <div>
            <label>
              <h2>Load Creating Date</h2>
            </label>
          </div>
          <div style={{ margin: 25 }}>
            {
              //Data-time pickers not working,should install new version
            }
            <Input
              label="Creating Date"
              variant="outlined"
              required
              type="data-time"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <TextField
              label="Load Number"
              required
              variant="outlined"
              helperText={loadNumberError}
              error={loadNumberError}
              value={loadNumber}
              onChange={(e) => setLoadNumber(e.target.value)}
            />
          </div>
          <div className="form-broker">
            <TextField
              label="Broker's Name"
              variant="outlined"
              name="dispatchName"
              value={brokerData.dispatchName}
              onChange={handleBrokerChange}
            />
            <TextField
              label="Broker's Phone"
              variant="outlined"
              required
              name="phone"
              value={brokerData.phone}
              onChange={handleBrokerChange}
            />
            <TextField
              label="Broker's Email"
              type="email"
              name="email"
              required
              variant="outlined"
              value={brokerData.email}
              onChange={handleBrokerChange}
            />
          </div>
          <div className="form-carrier">
            <TextField
              label="Carrier's Company Name"
              variant="outlined"
              required
              name="companyName"
              value={carrierData.companyName}
              onChange={handleCarrierChange}
            />
            <TextField
              label="Carrier's Phone"
              variant="outlined"
              required
              name="phone"
              value={carrierData.phone}
              onChange={handleCarrierChange}
            />
            <TextField
              label="Carrier's Email"
              type="email"
              required
              name="email"
              variant="outlined"
              value={carrierData.email}
              onChange={handleCarrierChange}
            />
            <TextField
              label="Dispatch Name"
              variant="outlined"
              required
              name="dispatchName"
              value={carrierData.dispatchName}
              onChange={handleCarrierChange}
            />
          </div>
          <div style={{ paddingTop: "45px" }}>
            <div>
              <TextField
                label="Carrier's Rate"
                variant="outlined"
                required
                helperText={rateError}
                error={rateError}
                value={carrierRate}
                onChange={(e)=>setCarrierRate(e.target.value)}
              />
              {/*<Select
              options={chargeOptions}
              value={selectedOption}
              onChange={handleInputChange}
            />
            */}
              <TextField
                label="Carrier pay fee"
                required
                helperText={feeError}
                error={feeError}
                id="fee"
                value={carrierFee}
                onChange={(e)=>setCarrierFee(e.target.value)}
              />
            </div>
          </div>
          <div style={{ paddingTop: "45px" }}>
            <NetPayCalculator />
          </div>
          <div className="shipper-info">
            <div style={{ paddingBottom: "15px" }}>
              <TextField
                label="Shipper's Name"
                required
                multiline
                name="warehouseName"
                value={shipperData.warehouseName}
                onChange={handleShipperChange}
              />
              <TextField
                label="Shipper's Address"
                required
                multiline
                name="address"
                value={shipperData.address}
                onChange={handleShipperChange}
              />
            </div>
            {/* <div className="shipper-region-selector">
              <CountryDropdown
                value={shipperCountry}
                onChange={(e) => setShipperCountry(e.target.value)}
              />
              <RegionDropdown
                country={shipperCountry}
                value={shipperState}
                onChange={(e) => setShipperState(e.target.value)}
              />
            </div> */}
            <div style={{ paddingTop: "15px" }}>
              <TextField
                label="Shipper's City"
                required
                multiline
                name="city"
                value={shipperData.city}
                onChange={handleShipperChange}
              />

              <TextField
                label="Shipper's ZipCode"
                required
                name="zipcode"
                multiline
                value={shipperData.zipcode}
                onChange={handleShipperChange}
              />
            </div>
          </div>
          <div className="data-selector">
            <div>
              <FormLabel color="primary">Earliest time for pick up</FormLabel>
              <div>
                <Input
                  type="datetime"
                  name="earliestTime"
                  value={shipperData.earliestTime}
                  onChange={handleShipperChange}
                />
              </div>
              {
              //Data-time pickers not working,should install new version
            }
            </div>
            <div style={{ paddingTop: "15px" }}>
              <FormLabel>Latest time for pick up</FormLabel>
              <div>
                <Input
                  type="datatime-local"
                  name="latestTime"
                  value={shipperData.latestTime}
                  onChange={handleShipperChange}
                />
              </div>
            </div>
          </div>
          <div>
            <div style={{ paddingTop: "45px", paddingBottom: "15px" }}>
              <TextField
                label="Reciever's Name"
                required
                name="wareouseName"
                multiline
                value={receiverData.name}
                onChange={handleReceiverChange}
              />
              <TextField
                label="Reciever's Address"
                required
                multiline
                name="address"
                value={receiverData.address}
                onChange={handleReceiverChange}
              />
            </div>
            <div>
              {/* <div className="region-selector">
                <CountryDropdown
                  value={recieverCountry}
                  onChange={(e) => setRecieverCountry(e)}
                />
                <RegionDropdown
                  country={recieverCountry}
                  value={recieverState}
                  onChange={(e) => setRecieverState(e.target.value)}
                />
              </div> */}
              <div style={{ paddingTop: "15px" }}>
                <TextField
                  label="Reciever's City"
                  required
                  name="city"
                  multiline
                  value={receiverData.city}
                  onChange={handleReceiverChange}
                />
                <TextField
                  label="Reciever's ZipCode"
                  required
                  multiline
                  name="zipcode"
                  value={receiverData.zipcode}
                  onChange={handleReceiverChange}
                />
              </div>
            </div>
          </div>
          <div className="data-selector">
            <div>
              <FormLabel color="primary">Earliest time for delivery</FormLabel>
              <div>
                <Input
                  type="datetime"
                  name="earliestTime"
                  value={receiverData.earliestTime}
                  onChange={handleReceiverChange}
                />
              </div>
            </div>
            <div style={{ paddingTop: "15px" }}>
              <FormLabel>Latest time for delivery</FormLabel>
              <div>
                <Input
                  type="datetime"
                  name="latestTime"
                  value={receiverData.latestTime}
                  onChange={handleReceiverChange}
                />
              </div>
            </div>
          </div>
          <div className="button-submit">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 10 }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Punchin;
