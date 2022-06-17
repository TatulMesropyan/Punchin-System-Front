import React from "react";
import {Box, Grid, Typography} from "@mui/material";

export const RateConBodyMiddle = ({data}) => {
    const {carrierData} = data;
    return (
        <Box>
            <Grid xs={12} border='1px solid black' height='100px'>
                <Typography fontWeight='bold' textAlign='center' fontSize='30px' paddingTop='20px'>
                    Carrier Info
                </Typography>
            </Grid>
            <Grid xs={12} container minHeight='40px' textAlign='center'>
                <Grid item border='1px solid black' xs={3} paddingTop='10px'>
                    <span style={{fontSize: '16px', fontWeight: 'bold'}}>Contact Name: {carrierData.dispatchName}</span>
                </Grid>
                <Grid item border='1px solid black' xs={3} paddingTop='10px'>
                    <span style={{fontSize: '16px', fontWeight: 'bold'}}>Contact Name: {carrierData.companyName}</span>
                </Grid>
                <Grid item border='1px solid black' xs={3} paddingTop='10px'>
                    <span style={{fontSize: '16px', fontWeight: 'bold'}}>Carrier Phone: {carrierData.phone}</span>
                </Grid>
                <Grid item border='1px solid black' xs={3} paddingTop='10px'>
                    <span style={{fontSize: '16px', fontWeight: 'bold'}}>Carrier Email: {carrierData.email}</span>
                </Grid>
            </Grid>
        </Box>
    )
}