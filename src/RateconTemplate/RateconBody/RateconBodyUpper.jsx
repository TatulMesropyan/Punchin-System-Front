import React from "react";
import {Box, Grid, Typography} from "@mui/material";

export const RateconBodyUpper = () => {
    return (
       <Box>
           <Grid minHeight='100px' xs={12} border='1px solid black' height='100px'>
               <Typography fontWeight='bold' textAlign='center' fontSize='30px' paddingTop='20px'>
                   Load Details
               </Typography>
           </Grid>
           <Grid xs={12} container height='35px'>
              <Grid xs={3} border='1px solid black'>Weight:{'44000'}lbs</Grid>
               <Grid xs={3} border='1px solid black'>Commodity:{'Foam'}</Grid>
               <Grid xs={3} sx={{color:'red'}} border='1px solid black'>Temperature:{'40F'}</Grid>
               <Grid xs={3} border='1px solid black'>Truck Type:{'53FT Van'}</Grid>
           </Grid>
           <Grid xs={12} container sx={{border:'1px solid black',height:'150px'}}>
               <Grid item xs={4} border='1px solid black'>
                   <Typography variant='h4'>
                       Carrier Pay
                   </Typography>
                   <span style={{fontSize:'20px'}}>Initial Rate:{'300'}$</span><br/>
                   <span style={{fontSize:'20px'}}>QP Charge:{'300'}%</span><br/>
                   <span style={{fontSize:'20px'}}>Net Pay:{'300'}$</span><br/>
               </Grid>
                <Grid item xs={4} border='1px solid black'>
                    <Typography variant='h4'>
                        Load Number
                    </Typography>
                    <span style={{fontSize:'26px'}}>#{'1234'}</span>
                </Grid>
               <Grid xs={4} border='1px solid black'>
                   <Typography variant='h4'>
                       Creating Date
                   </Typography>
                   <span style={{fontSize:'26px'}}>{'06/02/2022'}</span>
               </Grid>
           </Grid>
       </Box>
    )
}