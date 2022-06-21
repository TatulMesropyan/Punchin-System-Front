import React from "react";

import {Box, Grid} from "@mui/material";

import HeaderLeftSide from "./HeaderLeftSide";
import HeaderRightSide from "./HeaderRightSide";
import HeaderMiddleSide from "./HeaderMiddleSide";

const RateConHeader = ({data}) => {
    return (
        <Box>
            <Grid xs={12} container>
                <Grid item xs={4} paddingTop={10}>
                    <HeaderLeftSide/>
                </Grid>
                <Grid item xs={4}>
                   <HeaderMiddleSide/>
                </Grid>
               <Grid item xs={4} paddingTop={10}>
                <HeaderRightSide data={data}/>
                </Grid>
            </Grid>

        </Box>
    )
}
export default RateConHeader;