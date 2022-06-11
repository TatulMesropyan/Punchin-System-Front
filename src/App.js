import './App.css';
import React from 'react';
import Punchin from './Punchin';
import Header from './Header.jsx'
import LoginPage from './LoginPage';
import RateCon from './RateconTemplate/RateCon'
import RateConHeader from "./RateconTemplate/RateconHeader/RateConHeader";
function App() {
    const headerData = {
        brokerName:'',
        brokerPhone:'',
        brokerEmail:'',
    }
  return (
   <>
       <RateCon headerData={headerData}/>
   </>
  );
}

export default App;
