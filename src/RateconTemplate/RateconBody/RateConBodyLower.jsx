import React from "react";
import {Box, Grid, Typography} from "@mui/material";

export const RateConBodyLower = ({data}) => {
    return (
        <Box sx={{border: '1px solid black'}}>
            <Grid container xs={12} paddingBottom='15px' border='1px solid black' minHeight='100px'>
                <Typography fontWeight='bold' textAlign='center' fontSize='30px' paddingTop='20px'>
                    Shipper Info
                </Typography>
            </Grid>
            <Grid xs={12} container paddingTop='20px' minHeight='150px'>
                <Grid xs={4} item textAlign='center'>
                    <span style={{fontSize: '20px', fontWeight: 'bold'}}>{data.shipperWarehouseName}<br/></span>
                    <span style={{fontSize: '20px', fontWeight: 'bold'}}>{data.shipperAddress}<br/></span>
                    <span style={{
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }} >`${data.shipperCity}, ${data.shipperState} ${data.shipperZipCode}`</span>
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <span style={{
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}>{data.shipperEarlyDate} - {data.shipperLateDate}</span>
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <span style={{fontSize: '20px', fontWeight: 'bold'}}>{'Some Comments and PU numbers'}</span>
                </Grid>
            </Grid>
            <Grid container xs={12} paddingBottom='15px' border='1px solid black' minHeight='100px'>
                <Typography fontWeight='bold' textAlign='center' fontSize='30px' paddingTop='20px'>
                    Receiver Info
                </Typography>
            </Grid>
            <Grid xs={12} container paddingTop='20px' minHeight='150px'>
                <Grid xs={4} item textAlign='center'>
                    <span style={{fontSize: '20px', fontWeight: 'bold', paddingBottom: '2px'}}>{data.receiverWarehouseName}<br/></span>
                    <span style={{fontSize: '20px', fontWeight: 'bold'}}>{data.receiverAddress}<br/></span>
                    <span style={{
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}>`${data.receiverCity}, ${data.receiverState} ${data.receiverZipcode}`</span>
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <span style={{
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}>{data.receiverEarlyDate} - {data.receiverLateDate}</span>
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <span style={{fontSize: '20px', fontWeight: 'bold'}}>{'Some Comments and PU numbers'}</span>
                </Grid>
            </Grid>
        </Box>
    )
}