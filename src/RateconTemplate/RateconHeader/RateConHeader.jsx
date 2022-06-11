import { Box, Grid} from "@mui/material";
import HeaderLeftSide from "./HeaderLeftSide";
import HeaderRightSide from "./HeaderRightSide";
import HeaderMiddleSide from "./HeaderMiddleSide";
import React from "react";

const RateConHeader = ({headerData}) => {
    return (
        <Box sx={{}}>
            <Grid xs={12} container>
                <Grid item xs={4} paddingTop={15}>
                    <HeaderLeftSide headerData={headerData}/>
                </Grid>
                <Grid item xs={4}>
                    <HeaderMiddleSide/>
                </Grid>
                <Grid item xs={4} paddingTop={15}>
                    <HeaderRightSide headerData={headerData}/>
                </Grid>
            </Grid>

        </Box>
    )
}
export default RateConHeader;