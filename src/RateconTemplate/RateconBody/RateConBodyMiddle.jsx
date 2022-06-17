import React from "react";
import {Box, Grid, Typography} from "@mui/material";

export const RateConBodyMiddle = ({data}) => {
    const styles = {
        fontSize: "16px",
        fontWeight: "bold",
    }
    return (
        <Box>
            <Grid xs={12} border='1px solid black' height='100px' container>
                <Typography fontWeight='bold' textAlign='center' fontSize='30px' paddingTop='20px'>
                    Carrier Info
                </Typography>
            </Grid>
            <Grid xs={12} container minHeight='40px' textAlign='center'>
                <Grid item border='1px solid black' xs={3} paddingTop='10px'>
                    <span style={styles}>Contact Name: {data.carrierCompanyName}</span>
                </Grid>
                <Grid item border='1px solid black' xs={3} paddingTop='10px'>
                    <span style={styles}>Contact Name: {data.carrierCompanyName}</span>
                </Grid>
                <Grid item border='1px solid black' xs={3} paddingTop='10px'>
                    <span style={styles}>Carrier Phone: {data.carrierPhone}</span>
                </Grid>
                <Grid item border='1px solid black' xs={3} paddingTop='10px'>
                    <span style={styles}>Carrier Email: {data.carrierEmail}</span>
                </Grid>
            </Grid>
        </Box>
    )
}