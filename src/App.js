import React, { useState } from 'react';
import { ethers } from 'ethers';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import './App.css';

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  return (
    <div className="App">
      <button>Fetch Greetings</button>
      <button>Set Greetings</button>
    </div>
  );
}

export default App;
