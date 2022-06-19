import React from "react";
import {BrokerPunchin} from "./BrokerPunchin";
import {CarrierPunchin} from "./CarrierPunchin"
import {MainPunchin} from "./MainPunchin";
import {ShipperPunchin} from "./ShipperPunchin";
import {ReceiverPunchin} from "./ReceiverPunchin";
import {Box, Grid} from "@mui/material";
import {FreightInfoPunchin} from "./FreightInfoPunchin";


export const PunchinPage = ({data,setData}) => {
    return (
        <Box sx={{paddingRight: '100px', paddingLeft: '100px', border: '1px solid black', minHeight: '1000px'}}>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item>
                    <MainPunchin data={data}  setData={setData}/>
                </Grid>
                <Grid xs={12} item>
                    <FreightInfoPunchin data={data} setData={setData}/>
                </Grid>
            </Grid>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item>
                    <BrokerPunchin data={data}  setData={setData}/>
                </Grid>
            </Grid>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item>
                    <CarrierPunchin data={data}  setData={setData}/>
                </Grid>
            </Grid>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item>
                    <ShipperPunchin data={data}  setData={setData}/>
                </Grid>
            </Grid>
            <Grid xs={12} container padding='20px'>
                <Grid xs={12} item>
                    <ReceiverPunchin data={data}  setData={setData}/>
                </Grid>
            </Grid>
        </Box>

    )
}