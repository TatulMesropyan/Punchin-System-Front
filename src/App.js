import './App.css';
import React from 'react';
import {PunchinPage} from "./PunchinPage/PunchinPage";
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box, Button, Grid} from "@mui/material";
import RateCon from './RateconTemplate/RateCon'

function App() {
    const [data, setData] = useState({})
    const handleAllData = () => {
        console.log(data)
        localStorage.setItem("DATA", {data})
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<PunchinPage data={data} setData={setData}/>}/>
                <Route path='/ratecon' exact element={<RateCon data={data} setData={setData}/>}/>
            </Routes>
            <Grid xs={12} item textAlign='center'>
                <Button variant='contained' sx={{textAlign: 'center'}} onClick={handleAllData}>
                    Submit
                </Button>
            </Grid>

        </BrowserRouter>
    );
}

export default App;
