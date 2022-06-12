import React from "react";
import {Box, Grid, Typography} from "@mui/material";
export const RateConBodyLower = () =>{
    return(
        <Box sx={{border:'1px solid black'}}>
            <Grid xs={12} paddingBottom='15px' border='1px solid black' minHeight='100px'>
            <Typography fontWeight='bold' textAlign='center' fontSize='30px' paddingTop='20px'>
                Shipper Info
            </Typography>
        </Grid>
            <Grid xs={12} container paddingTop='20px' minHeight='150px'>
            <Grid xs={4} item textAlign='center'>
                <span style={{fontSize:'20px',fontWeight:'bold'}}>{' WareHouse Name'}<br/></span>
                <span style={{fontSize:'20px',fontWeight:'bold'}}>{'Address'}<br/></span>
                <span style={{fontSize:'20px',fontWeight:'bold'}}>{`${'Pittsburgh'}, ${'State'} ${'ZipCode'}`}</span>
            </Grid>
                <Grid xs={4} item textAlign='center'>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>{'Early Date - Early Time'} - {'Late Date - Late Time'}</span>
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>{'Some Comments and PU numbers'}</span>
                </Grid>
        </Grid >
            <Grid xs={12} paddingBottom='15px' border='1px solid black' minHeight='100px'>
                <Typography fontWeight='bold' textAlign='center' fontSize='30px' paddingTop='20px'>
                    Receiver Info
                </Typography>
            </Grid>
            <Grid xs={12} container paddingTop='20px' minHeight='150px'>
                <Grid xs={4} item textAlign='center'>
                    <span style={{fontSize:'20px',fontWeight:'bold',paddingBottom:'2px'}}>{' WareHouse Name'}<br/></span>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>{'Address'}<br/></span>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>{`${'Pittsburgh'}, ${'State'} ${'ZipCode'}`}</span>
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>{'Early Date - Early Time'} - {'Late Date - Late Time'}</span>
                </Grid>
                <Grid xs={4} item textAlign='center'>
                    <span style={{fontSize:'20px',fontWeight:'bold'}}>{'Some Comments and PU numbers'}</span>
                </Grid>
            </Grid >
        </Box>
        )
}