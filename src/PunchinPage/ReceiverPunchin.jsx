import React from "react";
import {TextField, Typography, Grid, Box} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";

export const ReceiverPunchin = ({data, setData}) => {
    return (
        <Box padding='20px'>
            <Grid xs={12} container>
                <Grid xs={12} item>
                    <Typography variant="h4" sx={{fontWeight:'bold',textAlign:'center',padding:'10px'}}>Receiver Info</Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} paddingBottom="25px">
                <Grid item xs={12}>
                    <TextField
                        label="Reciever's Name"
                        required
                        fullWidth
                        name="warehouseName"
                        multiline
                        value={data.receiverWarehouseName}
                        onChange={(e) => setData({...data, receiverWarehouseName: e.target.value})}
                    />
                </Grid>
            </Grid>
            <Grid xs={12} container paddingBottom="25px">
                <Grid xs={6} item>
                    <TextField
                        label="Reciever's Address"
                        required
                        fullWidth
                        name="address"
                        value={data.receiverAddress}
                        onChange={(e) => setData({...data, receiverAddress: e.target.value})}
                    />
                </Grid>
                <Grid xs={6} item>
                    <TextField
                        label="Reciever's City"
                        required
                        name="city"
                        fullWidth
                        value={data.receiverCity}
                        onChange={(e) => setData({...data, receiverCity: e.target.value})}
                    />
                </Grid>
                <Grid xs={12} container paddingTop="25px">
                    <Grid xs={6} item>
                        <TextField
                            label="Reciever's State"
                            required
                            fullWidth
                            value={data.receiverState}
                            onChange={(e) => setData({...data, receiverState: e.target.value})}
                        />
                    </Grid>
                    <Grid xs={6} item>
                        <TextField
                            label="Reciever's ZipCode"
                            required
                            fullWidth
                            value={data.receiverZipcode}
                            onChange={(e) => setData({...data, receiverZipcode: e.target.value})}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} container>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid xs={6} item>
                        <Typography variant="h6">Earliest Time</Typography>
                        <DateTimePicker
                            renderInput={(props) => <TextField fullWidth {...props} />}
                            value={data.receiverEarlyDate}
                            onChange={(e) => setData({...data, receiverEarlyDate: e})}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6">Latest Time</Typography>
                        <DateTimePicker
                            renderInput={(props) => <TextField fullWidth {...props} />}
                            value={data.receiverLateDate}
                            onChange={(e) => setData({...data, receiverLateDate: e})}
                        />
                    </Grid>
                </LocalizationProvider>
            </Grid>
        </Box>
    )
}