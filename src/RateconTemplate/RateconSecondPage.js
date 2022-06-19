import React from "react";

import {Box,Grid} from "@mui/material";
export const RateconSecondPage = () =>{
    return(
        <Box paddingTop="100px">
            <Grid>
            COMMENTS<br/>
            Carrier agrees to sign the Confirmation and return it to BROKER via E-Mail and Carrier shall be conclusively presumed to have agreed to the<br/>
            rates set forth herein. By its signature below Carrier further represents and warrants that said mutually agreed upon rates are reasonable and<br/>
            compensatory. Carrier agrees to rate deduction per company policy for late deliveries, missing paperwork, late POD submission, no<br/>
            communication, breach of the contract conditions agreed with the broker.<br/>
            We pay : For Straight Box Truck TONU we pay the carrier $50, for 53 ft Dry Van $150, Detention $20 per hour (first 3 hours are free),<br/>
            Layover $100 per day<br/>
           <span style={{color:'red'}}>POD must be sent to load broker In 4 hours after delivery.Otherwise rate will be reduced for 400$.<br/></span>
            </Grid>
            <Grid paddingTop='150px'>
            <span style={{fontWeight:'bold'}}>Signature:_________________ Date:______________<br/></span>
            </Grid>

        </Box>
    )
}