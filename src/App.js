import './App.css';
import React from 'react';
import Punchin from './PunchinPage/Punchin';
import {Box} from "@mui/material";
import RateCon from './RateconTemplate/RateCon'
function App() {
    const headerData = {
        brokerName:'',
        brokerPhone:'',
        brokerEmail:'',
    }
  return (
   <Box>
       <RateCon headerData={headerData}/>
   </Box>
  );
}

export default App;
