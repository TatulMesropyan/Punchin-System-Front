import React, {useState,createContext} from "react";
import {Grid, TextField, Box, Typography} from "@mui/material";

export const BrokerPunchin = ({data,setData}) => {

    const [brokerData, setBrokerData] = useState({
        dispatchName: "",
        phone: "",
        email: "",
    });

    const handleBrokerChange = (e) => {
        const {name, value} = e.target;
        setBrokerData({
            ...brokerData,
            [name]: value,
        })
        setData({...data,brokerData});
    };
    return (
        <Box paddingTop='20px' paddingBottom='20px'>
            <Grid xs={12} container>
                <Grid xs={12} item textAlign='center'>
                    <Typography variant="h4" align="center" fontWeight='bold'>
                        Broker Info
                    </Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} paddingTop='25px'>
                <Grid xs={4} item textAlign='center'>
                    <TextField
                        label="Broker's Name"
                        variant="outlined"
                        name="dispatchName"
                        fullWidth
                        value={brokerData.dispatchName}
                        onChange={handleBrokerChange}
                    />
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <TextField
                        label="Broker's Phone"
                        variant="outlined"
                        required
                        name="phone"
                        fullWidth
                        value={brokerData.phone}
                        onChange={handleBrokerChange}
                    />
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <TextField
                        label="Broker's Email"
                        name="email"
                        required
                        fullWidth
                        variant="outlined"
                        value={brokerData.email}
                        onChange={handleBrokerChange}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}