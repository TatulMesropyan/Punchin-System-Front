import React from "react";
import {Grid} from "@mui/material";


const HeaderRightSide = ({data}) => {
    return (
        <Grid>
            Broker's Name: {data.brokerDispatchName}<br/>
            Email: {data.brokerEmail}<br/>
            Phone: {data.brokerPhone}<br/>
            Manager's Name: Aida Davis<br/>
            Email:main.greenlinelogistics@gmail.com<br/>
            Phone:(870)205-8050<br/>
        </Grid>
    )
}
export default HeaderRightSide;