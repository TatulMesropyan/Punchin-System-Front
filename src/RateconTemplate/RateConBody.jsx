import React from "react";
import {Box,Grid,Typography} from "@mui/material";

const RateConBody = () => {
    return (
        <Box>
            <Grid xs={12} sx={{ position: 'fixed', marginTop: '300px' }} container>
                <Grid xs={12} item>
                    <Typography align="center" fontStyle='italic'>
                        Load Creating Date<br />
                        {'date'}
                    </Typography>
                </Grid>
                <Grid xs={1} item sx={{position:'fixed'}}>
                    <span>Rate:{''}<br /></span>
                    <span > QP Charge:{''}<br /></span>
                    Net Pay:{''} <br/>
                </Grid>
            </Grid>
        </Box>
    )
}
export default  RateConBody;