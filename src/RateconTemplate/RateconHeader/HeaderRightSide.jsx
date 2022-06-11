import React from "react";
import {Grid} from "@mui/material";


const HeaderRightSide = ({headerData}) => {
    return (
        <Grid>
                Broker's Name: {headerData.brokerName}<br />
                Email: {headerData.brokerEmail}<br />
                Phone: {headerData.brokerPhone}<br />
                Manager's Name: Aida Davis<br />
                Email:main.greenlinelogistics@gmail.com
                Phone:(870)205-8050<br />
            </Grid>
    )
}
export default HeaderRightSide;