import { Box, Grid} from "@mui/material";
import HeaderLeftSide from "./HeaderLeftSide";
import HeaderRightSide from "./HeaderRightSide";
import HeaderMiddleSide from "./HeaderMiddleSide";
import React from "react";

const RateConHeader = ({headerData}) => {
    return (
        <Box>
            <Grid xs={12} container>
                <Grid item xs={4} paddingTop={10}>
                    <HeaderLeftSide headerData={headerData}/>
                </Grid>
                <Grid item xs={4}>
                    <HeaderMiddleSide/>
                </Grid>
                <Grid item xs={4} paddingTop={10}>
                    <HeaderRightSide headerData={headerData}/>
                </Grid>
            </Grid>

        </Box>
    )
}
export default RateConHeader;