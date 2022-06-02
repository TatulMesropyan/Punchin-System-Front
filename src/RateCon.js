import React from "react";
import { AppBar, Box, Grid, Typography } from "@mui/material";
import App from "./App";
import greenlogo from './Static/greenlogo.png'
const RateCon = () => {
    return (
        <>
        <Box sx={{ position: 'fixed', margin: 0, padding: 10 }}>
            <Grid xs={12} container sx={{position:'fixed'}}>
                <AppBar color="success" sx={{ height: '300px', textAlign: 'center', justifyContent: 'center',position:'fixed' }}>
                    <Grid xs={12} container position="fixed">
                        <Grid xs={12} item sx={{position:'fixed'}}>
                            <Typography variant="h3" position="fixed" sx={{ paddingLeft: '35%', paddingTop: '10px' }}>GreenLine Logistics</Typography>
                        </Grid>
                        <Grid align="center">
                           
                        </Grid>
                        <Grid textAlign='left' sx={{ position:'fixed',fontSize: '14px', paddingBottom: '8px',paddingTop:'15px', paddingLeft: '10px' }}>
                            <span style={{ paddingLeft: '5%' }}>
                                <img src={greenlogo} alt="" width={80} height={80} /><br />
                            </span>
                            138 RUTH ST PITTSBURGH, PA 15211<br />
                            main.greenlinelogistics@gmail.com<br />
                            MC#1338972<br />
                            Carrier Payables Contacts<br />
                            Email:talinagreenline@gmail.com<br />
                            Phone:(412) 415-7706 EXT 404 <br />
                        </Grid>
                        <Grid xs={6} textAlign="left" item sx={{position:'relative', fontSize: '14px',paddingTop:'80px', marginLeft: '450px', paddingLeft: '450px' }}>
                            Broker's Name: {''}<br />
                            Email: {''}<br />
                            Phone: {''}<br />
                            Manager's Name: Aida Davis<br />
                            Email:main.greenlinelogistics@gmail.com
                            Phone:(870)205-8050<br />
                        </Grid>
                    </Grid>
                </AppBar>
            </Grid >
        </Box>
        <Box> 
            <Grid xs={12} sx={{position:'fixed'}} container>
                    <Grid xs={12} item> 
                        <Typography sx={{color:'black'}}>Load Creating Date</Typography>
                    </Grid>
                </Grid>
        </Box>
        </>
    )
}
export default RateCon;