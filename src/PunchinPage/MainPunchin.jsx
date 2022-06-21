import React, {useEffect, useState} from "react";

import {Box, Grid, TextField, Typography} from "@mui/material";

import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers";

export const MainPunchin = ({data, setData}) => {
    const [carrierNetPay, setCarrierNetPay] = useState('');

    const NetPayCalculator = () => {
        if (data.carrierRate && data.carrierFee) {
            let x = data.carrierRate - (data.carrierRate * data.carrierFee) / 100;
            setCarrierNetPay(x);
            return <TextField label="Net Pay" fullWidth value={carrierNetPay}/>;
        } else return <TextField value={"Enter Valid Numbers"} label="Net Pay" fullWidth/>
    };
    useEffect(() => {
        document.title = `Load Number: ${data.loadNumber ? data.loadNumber : "⛔️"}`
    }, [data.loadNumber]);
    return (
        <Box padding='20px'>
            <Grid container xs={12}>
                <Grid item xs={12} textAlign='center'>
                    <Typography variant="h4"  sx={{fontWeight:'bold',textAlign:'center',padding:'10px'}}>Load Creating Date</Typography>
                </Grid>
            </Grid>
            <Grid xs={12} container paddingBottom='20px'>
                <Grid xs={6} item>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Creating Date"
                            renderInput={(props) => <TextField fullWidth {...props} />}
                            required
                            onChange={(newDateCreating) => {
                                setData({...data, loadCreatingDate: newDateCreating})
                            }}
                            value={data.loadCreatingDate}
                            onBlur={() => console.log(data.loadCreatingDate)}
                            // onChange={(e) => setData({...data, loadCreatingDate: e})}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid xs={6} item>
                    <TextField
                        label="Load Number"
                        required
                        fullWidth
                        variant="outlined"
                        value={data.loadNumber}
                        onChange={(e) => setData({...data, loadNumber: e.target.value})}
                    />
                </Grid>
            </Grid>
            <Grid container xs={12} paddingBottom='20px'>
                <Grid xs={6} item>
                    <TextField
                        label="Carrier's Rate"
                        variant="outlined"
                        required
                        fullWidth
                        value={data.carrierRate}
                        onChange={(e) => setData({...data, carrierRate: e.target.value})}
                    />
                </Grid>
                <Grid xs={6} item>
                    <TextField
                        label="Carrier pay fee"
                        required
                        fullWidth
                        value={data.carrierFee}
                        onChange={(e) => setData({...data, carrierFee: e.target.value})}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12} paddingBottom='20px'>
                <NetPayCalculator/>
            </Grid>
        </Box>
    )
}