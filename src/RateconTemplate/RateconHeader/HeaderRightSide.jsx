import React from "react";
import {Grid} from "@mui/material";


const HeaderRightSide = ({data}) => {
    return (
        <Grid>
            Broker's Name: {data.brokerData.dispatchName}<br/>
            Email: {data.brokerData.email}<br/>
            Phone: {data.brokerData.phone}<br/>
            Manager's Name: Aida Davis<br/>
            Email:main.greenlinelogistics@gmail.com<br/>
            Phone:(870)205-8050<br/>
        </Grid>
    )
}
export default HeaderRightSide;