import React, {useState} from "react";
import {Grid, TextField, Box, Typography} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

export const ShipperPunchin = ({data, setData}) => {
    const [shipperEarlyDate, setShipperEarlyDate] = useState("");
    const [shipperLateDate, setShipperLateDate] = useState("");

    const [shipperData, setShipperData] = useState({
        warehouseName: "",
        address: "",
        city: "",
        state: "",
        country: "United States",
        zipcode: "",
    });
    const handleShipperChange = (e) => {
        const {name, value} = e.target;
        setShipperData({
            ...shipperData,
            [name]: value,
        })
        setData({...data, shipperData})
    };
    return (
        <Box>
            <Grid xs={12} container>
                <Grid xs={12} item>
                    <Typography variant="h4" align="center" fontWeight='bold'>
                        Shipper Info
                    </Typography>
                </Grid>
            </Grid>
            <Grid xs={12} container>
                <Grid xs={12} item>
                    <TextField
                        label="Shipper's Name"
                        required
                        multiline
                        fullWidth
                        sx={{paddingBottom: '10px'}}
                        name="warehouseName"
                        value={shipperData.warehouseName}
                        onChange={handleShipperChange}
                    />
                </Grid>
            </Grid>
            <Grid xs={12} container>
                <Grid xs={6} item>
                    <TextField
                        label="Shipper's Address"
                        required
                        fullWidth
                        multiline
                        name="address"
                        value={shipperData.address}
                        onChange={handleShipperChange}
                    />
                </Grid>
                <Grid xs={6} item>
                    <TextField
                        label="Shipper's City"
                        required
                        name="city"
                        fullWidth
                        value={shipperData.city}
                        onChange={handleShipperChange}
                    />
                </Grid>
                <Grid xs={12} container>
                    <Grid xs={6} item>
                        <TextField
                            label="Shipper's State"
                            required
                            fullWidth
                            sx={{paddingBottom: '10px'}}
                            name="state"
                            value={shipperData.state}
                            onChange={handleShipperChange}
                        />
                    </Grid>
                    <Grid xs={6} item>
                        <TextField
                            label="Shipper's ZipCode"
                            required
                            fullWidth
                            name="zipcode"
                            value={shipperData.zipcode}
                            onChange={handleShipperChange}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} container>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid item xs={6}>
                        <Typography variant="h6">Earliest Time</Typography>
                        <DateTimePicker
                            renderInput={(props) => <TextField fullWidth {...props} />}
                            value={shipperEarlyDate}
                            onChange={(e) => setShipperEarlyDate(e)}
                        />
                    </Grid>
                    <Grid xs={6} item>
                        <Typography variant="h6">Latest Time</Typography>
                        <DateTimePicker
                            renderInput={(props) => <TextField fullWidth {...props} />}
                            value={shipperLateDate}
                            onChange={(e) => setShipperLateDate(e)}
                        />
                    </Grid>
                </LocalizationProvider>
            </Grid>
        </Box>
    )
}