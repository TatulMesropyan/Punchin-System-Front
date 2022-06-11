import React from "react";
import {Box} from "@mui/material";
import RateConHeader from "./RateconHeader/RateConHeader";
const RateCon = ({headerData}) => {
    return (
        <Box>
            <RateConHeader headerData={headerData}/>
        </Box>
    )
}
export default RateCon;