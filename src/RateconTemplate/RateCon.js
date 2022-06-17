import React from "react";
import {Box, Grid} from "@mui/material";
import RateConHeader from "./RateconHeader/RateConHeader";
import RateConBody from "./RateconBody/RateConBody";

const RateCon = ({data}) => {
    return (
        <Box>
            <Grid xs={12} container sx={{border: '2px solid black'}}>
                <Grid xs={12} item>
                    <RateConHeader data={data}/>
                </Grid>
            </Grid>
            <Grid xs={12} item>
                <RateConBody data={data}/>
            </Grid>

        </Box>
    )
}
export default RateCon;