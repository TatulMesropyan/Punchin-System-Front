import React, { useEffect, useState } from "react";
import { TextField, Button, Input, FormLabel } from "@mui/material";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
//import Select from "react-select";
import "./App.css";

const Punchin = () => {
  /* const [shipper, setShipper] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "United States",
    zipcode: "",
  });
  const handleShipperName = (event) => {
    setShipper({name:event.target.value});
    console.log("Shipper Name",shipper.name)
  };
  const handleShipperAddress = (event) =>{
    setShipper({address:event.target.value})
  }
  const handleShipperCity = (event) => {
    setShipper({city:event.target.value});
  };
  const handleShipperCountry = (event) =>{
    setShipper({country:event.target.value})
  }
  const handleShipperState = (event) =>{
    setShipper({state:event.target.value})
  }
  const handleShipperZipcode = (event) =>{
    setShipper({zipcode:event.target.value})
  }
*/
  const [brokersName, setBrokersName] = useState("");
  const [brokersPhone, setBrokersPhone] = useState("");
  const [brokersEmail, setBrokersEmail] = useState("");
  const [loadNumber, setLoadNumber] = useState("");
  const [date, setDate] = useState("");
  const [carriersName, setcarriersName] = useState("");
  const [carriersPhone, setCarriersPhone] = useState("");
  const [carriersEmail, setCarriersEmail] = useState("");
  const [dispatchName, setDispatchName] = useState("");
  const [shipperName, setShipperName] = useState("");
  const [shipperAddress, setShipperAddress] = useState("");
  const [shipperCity, setShipperCity] = useState("");
  const [shipperState, setShipperState] = useState("");
  const [shipperCountry, setShipperCountry] = useState("United States");
  const [shipperZipCode, setShipperZipCode] = useState("");
  const [recieverName, setRecieverName] = useState("");
  const [recieverAddress, setRecieverAddress] = useState("");
  const [recieverCity, setRecieverCity] = useState("");
  const [recieverState, setRecieverState] = useState("");
  const [recieverZipCode, setRecieverZipCode] = useState("");
  const [recieverCountry, setRecieverCountry] = useState("United States");
  const [carrierRate, setCarrierRate] = useState("");
  const [carrierFee, setCarrierFee] = useState("");
  //  const [selectedOption, setSelectedOption] = useState("");
  const [netPay, setNetPay] = useState("");
  useEffect(() => {
    document.title = `Load#${loadNumber}`;
  }, [loadNumber]);

  /*const chargeOptions = [
    { value: 0, label: "Factoring" },
    { value: 3.5, label: "3-5 Buisness Days" },
    { value: 5, label: "Same Day" },
  ];
  function handleInputChange(selectedOption) {
    setSelectedOption({ selectedOption });
    console.log(selectedOption)
    }
   */

  function NetPayCalculator() {
    let x = carrierRate - (carrierRate * carrierFee) / 100;
    setNetPay(x);
    return (
      <div>
        <TextField label="Net Pay" value={netPay} />
      </div>
    );
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(
      brokersName,
      brokersEmail,
      brokersPhone,
      loadNumber,
      carriersName,
      dispatchName,
      carriersPhone,
      carriersEmail
    );
  };

  return (
    <div>
      <form onSubmit={HandleSubmit} className="main-reg">
        <div className="data-selector">
          <div>
            <label>
              <h2>Load Creating Date</h2>
            </label>
          </div>
          <div style={{ margin: 25 }}>
            <Input
              label="Creating Date"
              variant="outlined"
              required
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-broker">
            <TextField
              label="Broker's Name"
              variant="outlined"
              value={brokersName}
              onChange={(e) => setBrokersName(e.target.value)}
            />
            <TextField
              label="Broker's Phone"
              variant="outlined"
              required
              value={brokersPhone}
              onChange={(e) => setBrokersPhone(e.target.value)}
            />
            <TextField
              label="Broker's Email"
              type="email"
              required
              variant="outlined"
              value={brokersEmail}
              onChange={(e) => setBrokersEmail(e.target.value)}
            />
            <TextField
              label="Load Number"
              required
              variant="outlined"
              value={loadNumber}
              onChange={(e) => setLoadNumber(e.target.value)}
            />
          </div>
          <div className="form-carrier">
            <TextField
              label="Carrier's Company Name"
              variant="outlined"
              required
              value={carriersName}
              onChange={(e) => setcarriersName(e.target.value)}
            />
            <TextField
              label="Carrier's Phone"
              variant="outlined"
              required
              value={carriersPhone}
              onChange={(e) => setCarriersPhone(e.target.value)}
            />
            <TextField
              label="Carrier's Email"
              type="email"
              required
              variant="outlined"
              value={carriersEmail}
              onChange={(e) => setCarriersEmail(e.target.value)}
            />
            <TextField
              label="Dispatch Name"
              variant="outlined"
              required
              value={dispatchName}
              onChange={(e) => setDispatchName(e.target.value)}
            />
          </div>
          <div style={{ paddingTop: "45px" }}>
            <TextField
              label="Carrier's Rate"
              variant="outlined"
              required
              value={carrierRate}
              onChange={(e) => setCarrierRate(e.target.value)}
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
              multiline
              value={carrierFee}
              onChange={(e) => setCarrierFee(e.target.value)}
            />
          </div>
          <div style={{ paddingTop: "45px" }}>
            <NetPayCalculator />
          </div>
          <div className="shipper-info">
            <div style={{paddingBottom:"15px"}}>
            <TextField
              label="Shipper's Name"
              required
              multiline
              value={shipperName}
              onChange={(e) => setShipperName(e.target.value)}
            />
            <TextField
              label="Shipper's Address"
              required
              multiline
              value={shipperAddress}
              onChange={(e) => setShipperAddress(e.target.value)}
            />
            </div>
            <div className="shipper-region-selector">
              <CountryDropdown
                value={shipperCountry}
                onChange={(e) => setShipperCountry(e.target.value)}
              />
              <RegionDropdown
                country={shipperCountry}
                value={shipperState}
                onChange={(e) => setShipperState(e.target.value)}
              />
            </div>
            <div style={{paddingTop:"15px"}}>
            <TextField
              label="Shipper's City"
              required
              multiline
              value={shipperCity}
              onChange={(e) => setShipperCity(e.target.value)}
            />

            <TextField
              label="Shipper's ZipCode"
              required
              multiline
              value={shipperZipCode}
              onChange={(e) => setShipperZipCode(e.target.value)}
            />
            </div>
          </div>
          <div className="data-selector">
            <div>
              <FormLabel color="primary">Earliest time for pick up</FormLabel>
              <div>
                <Input type="date" />
                <Input type="time" />
              </div>
            </div>
            <div style={{ paddingTop: "15px" }}>
              <FormLabel>Latest time for pick up</FormLabel>
              <div>
                <Input type="date" />
                <Input type="time" />
              </div>
            </div>
          </div>
          <div>
            <TextField
              label="Reciever's Name"
              required
              multiline
              value={recieverName}
              onChange={(e) => setRecieverName(e.target.value)}
            />
            <TextField
              label="Reciever's Address"
              required
              multiline
              value={recieverAddress}
              onChange={(e) => setRecieverAddress(e.target.value)}
            />
            <div>
              <div className="region-selector">
                <CountryDropdown
                  value={recieverCountry}
                  onChange={(e) => setRecieverCountry(e)}
                />
                <RegionDropdown
                  country={recieverCountry}
                  value={recieverState}
                  onChange={(e) => setRecieverState(e)}
                />
              </div>
              <TextField
                label="Reciever's City"
                required
                multiline
                value={recieverCity}
                onChange={(e) => setRecieverCity(e.target.value)}
              />
              <TextField
                label="Reciever's ZipCode"
                required
                multiline
                value={recieverZipCode}
                onChange={(e) => setRecieverZipCode(e.target.value)}
              />
            </div>
          </div>
          <div className="data-selector">
            <div style={{ paddingTop: "15px" }}>
              <FormLabel color="primary">Earliest time for delivery</FormLabel>
              <div>
                <Input type="date" />
                <Input type="time" />
              </div>
            </div>
            <div style={{ paddingTop: "15px" }}>
              <FormLabel>Latest time for delivery</FormLabel>
              <div>
                <Input type="date" />
                <Input type="time" />
              </div>
            </div>
          </div>
          <div className="button-submit">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 10 }}
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
