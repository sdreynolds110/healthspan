import React from 'react';
import Navbar from "./components/navbar"
import FirstRow from "./components/firstRow"
import SecondRow from "./components/secondRow"
import './index.css';
import './App.css';


function App() {
  return (
  <div>
    <Navbar />
    <FirstRow />
    <SecondRow />
  </div>
  );
}

export default App;
