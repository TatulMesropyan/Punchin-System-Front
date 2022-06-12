import './App.css';
import React from 'react';
import {PunchinPage} from "./PunchinPage/PunchinPage";
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
       <PunchinPage/>
       {/*<RateCon headerData={headerData}/>*/}
   </Box>
  );
}

export default App;
