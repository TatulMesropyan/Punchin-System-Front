import React, {useState} from 'react';

import './App.css';

import {PunchinPage} from "./PunchinPage/PunchinPage";
import RateCon from './RateconTemplate/RateCon'

import {Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router";

import {Button, Grid} from "@mui/material";

function App() {
    const [data, setData] = useState({})

    return (
        <>
            <Routes>
                <Route path='/' exact element={<PunchinPage data={data} setData={setData}/>}/>
                <Route path='/ratecon' exact element={<RateCon data={data}/>}/>
            </Routes>
        </>);
}

export default App;
