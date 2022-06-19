import React, {useState,createContext} from "react";
import {Grid, TextField, Box, Typography} from "@mui/material";

export const BrokerPunchin = ({data,setData}) => {
    return (
        <Box padding='20px'>
            <Grid xs={12} container>
                <Grid xs={12} item textAlign='center'>
                    <Typography variant="h4" sx={{fontWeight:'bold',textAlign:'center',padding:'10px'}}>
                        Broker Info
                    </Typography>
                </Grid>
            </Grid>
            <Grid container xs={12} >
                <Grid xs={4} item textAlign='center'>
                    <TextField
                        label="Broker's Name"
                        variant="outlined"
                        name="dispatchName"
                        fullWidth
                        value={data.brokerDispatchName}
                        onChange={(e) => setData({...data,brokerDispatchName: e.target.value})}
                    />
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <TextField
                        label="Broker's Phone"
                        variant="outlined"
                        required
                        name="phone"
                        fullWidth
                        value={data.brokerPhone}
                        onChange={(e) => setData({...data,brokerPhone:e.target.value})}
                    />
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <TextField
                        label="Broker's Email"
                        name="email"
                        required
                        fullWidth
                        variant="outlined"
                        value={data.brokerEmail}
                        onChange={(e) => setData({...data,brokerEmail:e.target.value})}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}