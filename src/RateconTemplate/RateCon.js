import React from "react";
import {Box, Grid} from "@mui/material";
import RateConHeader from "./RateconHeader/RateConHeader";
import RateConBody from "./RateconBody/RateConBody";

const RateCon = ({headerData}) => {
    return (
        <Box>
            <Grid sx={{border: '2px solid black'}}>
                <RateConHeader headerData={headerData}/>
            </Grid>
            <RateConBody/>
        </Box>
    )
}
export default RateCon;