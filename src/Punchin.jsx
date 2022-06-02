import React, { useEffect, useState } from "react";
import {
  TextField,
  Box,
  Button,
  Input,
  FormLabel,
  Grid,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DatePicker } from "@mui/x-date-pickers";
import "./App.css";

const Punchin = () => {
  const [date, setDate] = useState("");
  const [loadNumber, setLoadNumber] = useState("");
  const [loadNumberError, setLoadNumberError] = useState("");
  const [feeError, setFeeError] = useState("");
  const [rateError, setRateError] = useState("");
  const [carrierRate, setCarrierRate] = useState("");
  const [carrierFee, setCarrierFee] = useState("");
  const [carrierNetPay, setCarrierNetPay] = useState("");
  const [shipperEarlyDate, setShipperEarlyDate] = useState("");
  const [shipperLateDate, setShipperLateDate] = useState("");
  const [receiverEarlyDate, setReceivEarlyDate] = useState("");
  const [receiverLateDate, setReceiverLateDate] = useState("");
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
  });
  const [receiverData, setReceiverData] = useState({
    warehouseName: "",
    address: "",
    city: "",
    state: "",
    country: "United States",
    zipcode: "",
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
    if (!/[0-9]/.test(loadNumber)) {
      setLoadNumberError("Must Contain Number!");
    }
    if (/[0-9]/.test(loadNumber)) {
      setLoadNumberError("");
    }
    if (!/[0-9]/.test(carrierFee)) {
      setFeeError("Must Contain Number!");
    }
    if (/[0-9]/.test(carrierFee)) {
      setFeeError("");
    }
    if (!/[0-9]/.test(carrierRate)) {
      setRateError("Must Contain Number!");
    }
    if (/[0-9]/.test(carrierRate)) {
      setRateError("");
    }
  }, [loadNumber, carrierFee, carrierRate]);

  const NetPayCalculator = () => {
    let x = carrierRate - (carrierRate * carrierFee) / 100;
    setCarrierNetPay(x);
    return <TextField label="Net Pay" value={carrierNetPay} />;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.title = loadNumber;
  }, [loadNumber]);

  return (
    <Box
      sx={{ paddingTop: "50px", textAlign: "center", alignContent: "center" }}
    >
      <Grid container xs={12} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Load Creating Date</Typography>
        </Grid>
        <Grid xs={12} container spacing={2} pt={3} sx={{ paddingLeft: "38%" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Creating Date"
              renderInput={(props) => <TextField {...props} />}
              required
              value={date}
              onChange={(e) => setDate(e)}
            />
          </LocalizationProvider>
          <TextField
            label="Load Number"
            required
            variant="outlined"
            helperText={loadNumberError}
            error={loadNumberError && true}
            value={loadNumber}
            onChange={(e) => setLoadNumber(e.target.value)}
          />
        </Grid>
        <Grid xs={12} item pt={8}>
          <Typography variant="h4" align="center">
            Broker Info
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid xs={12} item pt={8}>
          <Typography variant="h4">Carrier Info</Typography>
        </Grid>
        <Grid xs={12} md={4} item pt={4}>
          <TextField
            label="Carrier's Company Name"
            variant="outlined"
            required
            name="companyName"
            fullWidth
            value={carrierData.companyName}
            onChange={handleCarrierChange}
          />
        </Grid>
        <Grid xs={12} item>
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
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Carrier's Rate"
            variant="outlined"
            required
            helperText={rateError}
            error={rateError}
            value={carrierRate}
            onChange={(e) => setCarrierRate(e.target.value)}
          />
          <TextField
            label="Carrier pay fee"
            required
            helperText={feeError}
            error={feeError}
            id="fee"
            value={carrierFee}
            onChange={(e) => setCarrierFee(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <NetPayCalculator />
        </Grid>
        <Grid xs={12} pt={10} item>
          <Grid xs={12} pb={2} item>
            <Typography variant="h4" align="center" pb={1}>
              Shipper Info
            </Typography>
            <TextField
              label="Shipper's Name"
              required
              multiline
              name="warehouseName"
              value={shipperData.warehouseName}
              onChange={handleShipperChange}
            />
          </Grid>
          <TextField
            label="Shipper's Address"
            required
            multiline
            name="address"
            value={shipperData.address}
            onChange={handleShipperChange}
          />
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
        </Grid>
        <Grid container xs={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid item xs={6}>
              <Typography variant="h6">Earliest Time</Typography>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                value={shipperEarlyDate}
                onChange={(e) => setShipperEarlyDate(e)}
              />
            </Grid>
            <Grid xs={6} item>
              <Typography variant="h6">Latest Time</Typography>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                value={shipperLateDate}
                onChange={(e) => setShipperLateDate(e)}
              />
            </Grid>
          </LocalizationProvider>
        </Grid>
        <Grid container align="center" spacing={2} xs={12}>
          <Typography variant="h4">Receiver Info</Typography>
          <Grid item xs={12}>
            <TextField
              label="Reciever's Name"
              required
              name="wareouseName"
              multiline
              value={receiverData.name}
              onChange={handleReceiverChange}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              label="Reciever's Address"
              required
              multiline
              name="address"
              value={receiverData.address}
              onChange={handleReceiverChange}
            />
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
          </Grid>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Grid container xs={12} spacing={2}>
              <Grid xs={6} item>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  value={receiverEarlyDate}
                  onChange={(e) => setReceivEarlyDate(e)}
                />
              </Grid>
              <Grid item xs={6}>
                <DateTimePicker
                  renderInput={(props) => <TextField {...props} />}
                  value={receiverLateDate}
                  onChange={(e) => setReceiverLateDate(e)}
                />
              </Grid>
            </Grid>
          </LocalizationProvider>
          <Grid>
            <Button
              type="submit"
              sx={{ textAlign: "center" }}
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Punchin;
