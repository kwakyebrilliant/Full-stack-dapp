import React, { useState } from 'react';
import { ethers } from 'ethers';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import './App.css';

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  return (
    <div className="App">
      <div className='App-header'>
      <div className="description">
          <h1>Greeter.sol</h1>
          <h3>Full stack dapp using ReactJS and Hardhat</h3>
        </div>
      <div className='custom-buttons'>
      <button style={{ backgroundColor: "blue" }}>Fetch Greetings</button>
      <button style={{ backgroundColor: "green" }}>Set Greetings</button>
      </div>
      

      <input 
      placeholder='Set Greeter Message'
      />
      </div>
    </div>
  );
}

export default App;
