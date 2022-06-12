import React, {useState} from "react";
import {Grid, TextField, Typography, Box} from "@mui/material";

export const CarrierPunchin = () => {

    const [carrierData, setCarrierData] = useState({
        companyName: "",
        email: "",
        phone: "",
        dispatchName: "",
    });

    const handleCarrierChange = (e) => {
        const {name, value} = e.target;
        setCarrierData({
            ...carrierData,
            [name]: value,
        });
    };
    return (
        <Box>
            <Grid xs={12} container>
                <Grid xs={12} item>
                    <Typography variant="h4" textAlign='center' fontWeight='bold'>Carrier Info</Typography>
                </Grid>
            </Grid>
            <Grid xs={12} container>
                <Grid xs={12} item>
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
            </Grid>
            <Grid xs={12} container>
                <Grid xs={4} item>
                    <TextField
                        label="Carrier's Phone"
                        variant="outlined"
                        required
                        fullWidth
                        name="phone"
                        value={carrierData.phone}
                        onChange={handleCarrierChange}
                    />
                </Grid>
                <Grid xs={4} item>
                    <TextField
                        label="Carrier's Email"
                        required
                        fullWidth
                        name="email"
                        variant="outlined"
                        value={carrierData.email}
                        onChange={handleCarrierChange}
                    />
                </Grid>
                <Grid xs={4} item>
                    <TextField
                        label="Dispatch Name"
                        variant="outlined"
                        required
                        fullWidth
                        name="dispatchName"
                        value={carrierData.dispatchName}
                        onChange={handleCarrierChange}
                    />
                </Grid>
            </Grid>

        </Box>
    )
}