import React from "react";
import {Grid, TextField, Typography, Box} from "@mui/material";

export const CarrierPunchin = ({data, setData}) => {
    return (
        <Box padding='20px'>
            <Grid xs={12} container>
                <Grid xs={12} item>
                    <Typography variant="h4"  sx={{fontWeight:'bold',textAlign:'center',padding:'10px'}}>Carrier Info</Typography>
                </Grid>
            </Grid>
            <Grid xs={12} container paddingBottom="25px">
                <Grid xs={12} item>
                    <TextField
                        label="Carrier's Company Name"
                        variant="outlined"
                        required
                        name="companyName"
                        fullWidth
                        value={data.carrierCompanyName}
                        onChange={(e) => setData({...data, carrierCompanyName: e.target.value})}
                    />
                </Grid>
            </Grid>
            <Grid xs={12} container>
                <Grid xs={4} item>
                    <TextField
                        label="Carrier's Phone"
                        variant="outlined"
                        required
                        fullWidth
                        name="phone"
                        value={data.carrierPhone}
                        onChange={(e) => setData({...data, carrierPhone: e.target.value})}
                    />
                </Grid>
                <Grid xs={4} item>
                    <TextField
                        label="Carrier's Email"
                        required
                        fullWidth
                        name="email"
                        variant="outlined"
                        value={data.carrierEmail}
                        onChange={(e) => setData({...data, carrierEmail: e.target.value})}
                    />
                </Grid>
                <Grid xs={4} item>
                    <TextField
                        label="Dispatch Name"
                        variant="outlined"
                        required
                        fullWidth
                        name="dispatchName"
                        value={data.carrierDispatchName}
                        onChange={(e) => setData({...data, carrierDispatchName: e.target.value})}
                    />
                </Grid>
            </Grid>

        </Box>
    )
}