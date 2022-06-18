import React from "react";
import {Box, Grid, Typography} from "@mui/material";

export const RateconBodyUpper = ({data}) => {
    return (
        <Box>
            <Grid minHeight='100px' item xs={12} border='1px solid black' height='100px'>
                <Typography fontWeight='bold' textAlign='center' fontSize='30px' paddingTop='20px'>
                    Load Details
                </Typography>
            </Grid>
            <Grid xs={12} container height='35px'>
                <Grid xs={3} paddingTop='8px' item border='1px solid black'>Weight:{data.freightWeight}lbs</Grid>
                <Grid xs={3} paddingTop='8px' item border='1px solid black'>Commodity:{data.freightCommodity}</Grid>
                <Grid xs={3} paddingTop='8px' item
                      sx={{color: 'red', border: '1px solid black'}}>Temperature:{data.freightTemperature}</Grid>
                <Grid xs={3} paddingTop='8px' item border='1px solid black'>Truck Type:{data.truckType}</Grid>
            </Grid>
            <Grid xs={12} container sx={{border: '1px solid black', height: '150px'}}>
                <Grid item xs={4} border='1px solid black'>
                    <Typography variant='h4'>
                        Carrier Pay
                    </Typography>
                    <span style={{fontSize: '20px'}}>Initial Rate:{data.carrierRate}$</span><br/>
                    <span style={{fontSize: '20px'}}>QP Charge:{data.carrierFee}%</span><br/>
                    <span
                        style={{fontSize: '20px'}}>Net Pay:{data.carrierRate - (data.carrierRate * data.carrierFee) / 100}$
                    </span><br/>
                </Grid>
                <Grid item xs={4} border='1px solid black'>
                    <Typography variant='h4'>
                        Load Number
                    </Typography>
                    <span style={{fontSize: '26px'}}>#{data.loadNumber}</span>
                </Grid>
                <Grid item xs={4} border='1px solid black'>
                    <Typography variant='h4'>
                        Creating Date
                    </Typography>
                    <span style={{fontSize: '26px'}}>{data.loadCreatingDate}</span>
                </Grid>
            </Grid>
        </Box>
    )
}