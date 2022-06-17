import './App.css';
import React from 'react';
import {PunchinPage} from "./PunchinPage/PunchinPage";
import {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router";
import {Box, Button, Grid} from "@mui/material";
import RateCon from './RateconTemplate/RateCon'

function App() {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const handleAllData = () => {
            console.log(data)
         navigate('/ratecon')
    }
    return (
        <>
            <Routes>
                <Route path='/' exact element={<PunchinPage data={data} setData={setData}/>}/>
                <Route path='/ratecon' exact element={<RateCon data={data}/>}/>
            </Routes>
                <Grid xs={12} item textAlign='center'>
                    <Button variant='contained' sx={{textAlign: 'center'}} onClick={handleAllData}>
                        Submit
                    </Button>
                </Grid>
        </>
    );
}

export default App;
