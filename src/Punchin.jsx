import React, { useEffect, useState } from "react";
import { TextField, Button, Input, FormLabel } from "@mui/material";
import "./App.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Select from "react-select";
const Punchin = () => {
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
  const [carrierNetPay, setCarrierNetPay] = useState("");
  useEffect(() => {
    document.title = `Load#${loadNumber}`;
  }, [loadNumber]);

  const netPayment = (carrierRate) => {
    let netPay;
    if (chargeOptions[0].value === 0) {
      
      netPay = carrierRate;
      setCarrierNetPay(netPay);
      return carrierNetPay;
    }
    console.log("Net Pay", netPay);
    if (chargeOptions[1].value === 3.5) {
      netPay = carrierRate - (carrierRate * 3.5) / 100;
      setCarrierNetPay(netPay);
      return carrierNetPay;
    }
    if (chargeOptions[2].value === 5) {
      netPay = carrierRate - (carrierRate * 5) / 100;
      setCarrierNetPay(netPay);
      return carrierNetPay;
    } else console.log("!!!");
  };

  useEffect(() => {
    console.log(carrierNetPay);
  }, [carrierNetPay]);

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(brokersName, brokersPhone, brokersEmail, loadNumber, date);
  };

  const chargeOptions = [
    { value: 0, label: "Factoring" },
    { value: 3.5, label: "3-5 Buisness Days" },
    { value: 5, label: "Same Day" },
  ];

  console.log();

  return (
    <div style={{ backgroundColor: "red" }}>
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
              className="textfield"
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
          <div className="shipper-info">
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
            <div className="shipper-region-selector">
              <CountryDropdown
                value={shipperCountry}
                onChange={(e) => setShipperCountry(e)}
              />
              <RegionDropdown
                country={shipperCountry}
                value={shipperState}
                onChange={(e) => setShipperState(e)}
              />
            </div>
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
              onChange={(e) => setShipperZipCode(e)}
            />
          </div>
          <div>
            <TextField
              label="Carrier's Rate"
              variant="outlined"
              required
              value={carrierRate}
              onChange={(e) => setCarrierRate(e.target.value)}
            />
            <Select options={chargeOptions} />
            <TextField value={carrierNetPay} />
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