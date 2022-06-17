import React from "react";
import {Box, Grid} from "@mui/material";
import RateConHeader from "./RateconHeader/RateConHeader";
import RateConBody from "./RateconBody/RateConBody";

const RateCon = ({data}) => {
    return (
        <Box>
            <Grid sx={{border: '2px solid black'}}>
            <RateConHeader data={data}/>
            </Grid>
            <RateConBody data={data}/>
        </Box>
    )
}
export default RateCon;