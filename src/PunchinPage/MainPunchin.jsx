import React, {useEffect, useState} from "react";
import {Box, Grid, TextField, Typography} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers";

export const MainPunchin = () =>{
    const [carrierRate, setCarrierRate] = useState(null);
    const [carrierFee, setCarrierFee] = useState(null);
    const [carrierNetPay, setCarrierNetPay] = useState(null);
    const [loadNumber,setLoadNumber] = useState(null)
    const [loadNumberError,setLoadNumberError] = useState('')
    const [date, setDate] = useState(null);
    const [rateError,setRateError] = useState('')
    const [feeError,setFeeError] = useState('')

    const NetPayCalculator = () => {
        let x = carrierRate - (carrierRate * carrierFee) / 100;
        setCarrierNetPay(x);
        return <TextField label="Net Pay" fullWidth value={carrierNetPay} />;
    };
    useEffect(() => {
        document.title = loadNumber;
    }, [loadNumber]);

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
    return(
        <Box>
            <Grid container xs={12} paddingBottom='20px'>
                <Grid item xs={12} textAlign='center'>
                <Typography variant="h4" fontWeight='bold'>Load Creating Date</Typography>
                </Grid>
            </Grid>
            <Grid xs={12} container>
                <Grid xs={6} item>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Creating Date"
                        renderInput={(props) => <TextField fullWidth {...props} />}
                        required
                        value={date}
                        onChange={(e) => setDate(e)}
                    />
                </LocalizationProvider>
                </Grid>
                <Grid xs={6} item>
                <TextField
                    label="Load Number"
                    required
                    fullWidth
                    variant="outlined"
                    helperText={loadNumberError}
                    error={loadNumberError && true}
                    value={loadNumber}
                    onChange={(e) => setLoadNumber(e.target.value)}
                />
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid xs={6}>
                <TextField
                    label="Carrier's Rate"
                    variant="outlined"
                    required
                    helperText={rateError}
                    error={rateError}
                    fullWidth
                    value={carrierRate}
                    onChange={(e) => setCarrierRate(e.target.value)}
                />
                </Grid>
                <Grid xs={6}>
                <TextField
                    label="Carrier pay fee"
                    required
                    helperText={feeError}
                    error={feeError}
                    fullWidth
                    value={carrierFee}
                    onChange={(e) => setCarrierFee(e.target.value)}
                />
                </Grid>
            </Grid>
            <Grid item xs={12} textAlign='center'>
                <NetPayCalculator />
            </Grid>
        </Box>
    )
}