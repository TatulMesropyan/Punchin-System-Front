import React from "react";
import {BrokerPunchin} from "./BrokerPunchin";
import {CarrierPunchin} from "./CarrierPunchin"
import {MainPunchin} from "./MainPunchin";
import {ShipperPunchin} from "./ShipperPunchin";
import {ReceiverPunchin} from "./ReceiverPunchin";
import {Box, Button, Grid} from "@mui/material";


export const PunchinPage = () => {
    return (
        <Box sx={{paddingRight: '100px', paddingLeft: '100px', border: '1px solid black', minHeight: '1000px'}}>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item>
                    <MainPunchin/>
                </Grid>
            </Grid>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item>
                    <BrokerPunchin/>
                </Grid>
            </Grid>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item>
                    <CarrierPunchin/>
                </Grid>
            </Grid>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item>
                    <ShipperPunchin/>
                </Grid>
            </Grid>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item>
                    <ReceiverPunchin/>
                </Grid>
            </Grid>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item textAlign='center'>
                    <Button variant='contained'>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Box>

    )
}