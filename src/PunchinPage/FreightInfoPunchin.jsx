import React from "react";

import {Grid, Box, TextField,Typography} from "@mui/material";

export const FreightInfoPunchin = ({data,setData}) => {
    return(
        <Box padding='20px'>
        <Grid xs={12} item>
            <Typography variant="h4" sx={{fontWeight:'bold',textAlign:'center',padding:'10px'}}>
                Main Details
            </Typography>
        </Grid>
            <Grid xs={12} container>
                 <Grid xs={3}>
                     <TextField
                         label="Freight Weight"
                         fullWidth
                         onChange={(e) => setData({...data,freightWeight:e.target.value})}
                         value={data.freightWeight}
                     />
                     </Grid>
                <Grid xs={3}>
                    <TextField
                        label="Freight Commodity"
                        fullWidth
                        onChange={(e) => setData({...data,freightCommodity:e.target.value})}
                        value={data.freightCommodity}/>
                </Grid>
                <Grid xs={3}>
                    <TextField
                        label="Freight Temperature"
                        fullWidth
                        onChange={(e) => setData({...data,freightTemperature:e.target.value})}
                        value={data.freightTemperature}/>
                </Grid>
                <Grid xs={3}>
                    <TextField
                        label="Service Type"
                        fullWidth
                        onChange={(e) => setData({...data,truckType:e.target.value})}
                        value={data.truckType}/>
                </Grid>
            </Grid>
        </Box>
    )
}