import React, {useRef} from "react";

import {Box, Button, Grid} from "@mui/material";

import RateConHeader from "./RateconHeader/RateConHeader";
import RateConBody from "./RateconBody/RateConBody";
import {RateconSecondPage} from "./RateconSecondPage";

import {jsPDF} from "jspdf";

import html2canvas from "html2canvas";


const RateCon = ({data}) => {
    const buttonRef = useRef()
    const pdfRef = useRef()

    const generatePdf = () => {
        const invis = buttonRef.current.style;
        invis.display = 'none'
        html2canvas(pdfRef.current, {scale: 1}).then((canvas) => {
            const width = canvas.width;
            const height = canvas.height;
            const orientation = width > height ? "l" : "p";
            let doc = new jsPDF(orientation, "px", [width, height]);
            const img = canvas.toDataURL("image/jpeg");
            doc.addImage(img, "JPEG", 0, 0, width, height);
            doc.save(`Load Number# ${data.loadNumber}`);
        })
        invis.display = 'block'
    }
    return (
        <Box ref={pdfRef} marign='5px'>
            <Grid xs={12} container sx={{border: '2px solid black'}}>
                <Grid xs={12} item>
                    <RateConHeader data={data}/>
                </Grid>
            </Grid>
            <Grid xs={12} item>
                <RateConBody data={data}/>
            </Grid>
            <RateconSecondPage/>
            <Button
                ref={buttonRef}
                onClick={generatePdf}
            >
                Print
            </Button>
        </Box>
    )
}
export default RateCon;