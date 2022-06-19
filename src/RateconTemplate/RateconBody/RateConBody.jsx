import React from "react";
import {Box, Grid} from "@mui/material";
import {RateconBodyUpper} from "./RateconBodyUpper";
import {RateConBodyMiddle} from "./RateConBodyMiddle";
import {RateConBodyLower} from "./RateConBodyLower";

const RateConBody = ({data}) => {
    return (
        <Box>
            <Grid xs={12} container>
                <Grid xs={12} textAlign='center' item sx={{border: '1px solid black'}}>
                    <RateconBodyUpper data={data}/>
                </Grid>
                <Grid xs={12} item>
                    <RateConBodyMiddle data={data}/>
                </Grid>
                <Grid xs={12} item>
                    <RateConBodyLower data={data}/>
                </Grid>
            </Grid>
        </Box>
    )
}
export default RateConBody;