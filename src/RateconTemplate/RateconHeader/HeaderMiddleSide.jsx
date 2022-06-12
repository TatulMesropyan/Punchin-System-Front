import React from "react";
import {Box} from "@mui/material";
import greenlogo from '../../Static/greenlogo.png'

const HeaderMiddleSide = () => {
    return (
        <Box textAlign={'center'}>
            <img src={greenlogo} alt='greenline'/>
        </Box>
    )
}
export default HeaderMiddleSide;