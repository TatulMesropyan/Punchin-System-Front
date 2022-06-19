import React from "react";
import {Grid, TextField, Box, Typography} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

export const ShipperPunchin = ({data, setData}) => {
    return (
        <Box padding='20px'>
            <Grid xs={12} container>
                <Grid xs={12} item>
                    <Typography variant="h4" sx={{fontWeight:'bold',textAlign:'center',padding:'10px'}}>
                        Shipper Info
                    </Typography>
                </Grid>
            </Grid>
            <Grid xs={12} container>
                <Grid xs={12} item paddingBottom='20px'>
                    <TextField
                        label="Shipper's Name"
                        required
                        multiline
                        fullWidth
                        value={data.shipperWarehouseName}
                        onChange={(e) => setData({...data, shipperWarehouseName: e.target.value})}
                    />
                </Grid>
            </Grid>
            <Grid xs={12} container paddingBottom='20px'>
                <Grid xs={6} item>
                    <TextField
                        label="Shipper's Address"
                        required
                        fullWidth
                        multiline
                        value={data.shipperAddress}
                        onChange={(e) => setData({...data, shipperAddress: e.target.value})}
                    />
                </Grid>
                <Grid xs={6} item>
                    <TextField
                        label="Shipper's City"
                        required
                        fullWidth
                        value={data.shipperCity}
                        onChange={(e) => setData({...data, shipperCity: e.target.value})}
                    />
                </Grid>
                <Grid xs={12} container paddingTop='20px'>
                    <Grid xs={6} item>
                        <TextField
                            label="Shipper's State"
                            required
                            fullWidth
                            value={data.shipperState}
                            onChange={(e) => setData({...data, shipperState: e.target.value})}
                        />
                    </Grid>
                    <Grid xs={6} item>
                        <TextField
                            label="Shipper's ZipCode"
                            required
                            fullWidth
                            name="zipcode"
                            value={data.shipperZipCode}
                            onChange={(e) => setData({...data, shipperZipCode: e.target.value})}
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
                            value={data.shipperEarlyDate}
                            onChange={(e) => setData({...data, shipperEarlyDate: e})}
                        />
                    </Grid>
                    <Grid xs={6} item>
                        <Typography variant="h6">Latest Time</Typography>
                        <DateTimePicker
                            renderInput={(props) => <TextField fullWidth {...props} />}
                            onChange={(e) => setData({...data, shipperLateDate: e})}
                            value={data.shipperLateDate}
                        />
                    </Grid>
                </LocalizationProvider>
            </Grid>
        </Box>
    )
}