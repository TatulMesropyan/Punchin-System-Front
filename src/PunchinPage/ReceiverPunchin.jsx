import React, {useState} from "react";
import {TextField, Typography, Grid, Box} from "@mui/material";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";

export const ReceiverPunchin = ({data,setData}) => {
    const [receiverEarlyDate, setReceivEarlyDate] = useState("")
    const [receiverLateDate, setReceiverLateDate] = useState("")


    const [receiverData, setReceiverData] = useState({
        warehouseName: "", address: "", city: "", state: "", country: "United States", zipcode: "",
    });
    const handleReceiverChange = (e) => {
        const {name, value} = e.target;
        setReceiverData({
            ...receiverData, [name]: value,
        });
        setData({...data,receiverData})
    };
    return (
        <Box>
            <Grid xs={12} container>
                <Grid xs={12} item>
                    <Typography variant="h4" fontWeight='bold' textAlign='center'>Receiver Info</Typography>
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={12}>
                    <TextField
                        label="Reciever's Name"
                        required
                        fullWidth
                        name="warehouseName"
                        multiline
                        value={receiverData.name}
                        onChange={handleReceiverChange}
                    />
                </Grid>
            </Grid>
            <Grid xs={12} container>
                <Grid xs={6} item>
                    <TextField
                        label="Reciever's Address"
                        required
                        fullWidth
                        name="address"
                        value={receiverData.address}
                        onChange={handleReceiverChange}
                    />
                </Grid>
                <Grid xs={6} item>
                    <TextField
                        label="Reciever's City"
                        required
                        name="city"
                        fullWidth
                        value={receiverData.city}
                        onChange={handleReceiverChange}
                    />
                </Grid>
                <Grid xs={12} container>
                    <Grid xs={6} item>
                        <TextField
                            label="Reciever's State"
                            required
                            fullWidth
                            name="state"
                            value={receiverData.state}
                            onChange={handleReceiverChange}
                        />
                    </Grid>
                <Grid xs={6} item>
                    <TextField
                        label="Reciever's ZipCode"
                        required
                        fullWidth
                        name="zipcode"
                        value={receiverData.zipcode}
                        onChange={handleReceiverChange}
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
                            value={receiverEarlyDate}
                            onChange={(e) => setReceivEarlyDate(e)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6">Latest Time</Typography>
                        <DateTimePicker
                            renderInput={(props) => <TextField fullWidth {...props} />}
                            value={receiverLateDate}
                            onChange={(e) => setReceiverLateDate(e)}
                        />
                    </Grid>
                </LocalizationProvider>
            </Grid>
        </Box>
    )
}