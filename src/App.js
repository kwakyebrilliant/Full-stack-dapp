import React, { useState } from 'react';
import { ethers } from 'ethers';
import Greeter from './artifacts/contracts/Greeter.sol/Greeter.json';
import './App.css';

const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {

  const [message, setMessage] = useState("");
  const [currentGreeting, setCurrentGreeting] = useState("");

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function fetchGreeting() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      try {
       
        const data = await contract.greet();
        console.log("data: ", data);
        setCurrentGreeting(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  async function setGreeting() {
    if (!message) return;

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(message);

      setMessage("");
      await transaction.wait();
      fetchGreeting();
    }
  }

  return (
    <div className="App">
      <div className='App-header'>
      <div className="description">
          <h1>Greeter.sol</h1>
          <h3>Full stack dapp using ReactJS and Hardhat</h3>
        </div>
      <div className='custom-buttons'>
      <button style={{ backgroundColor: "blue" }} onClick={fetchGreeting}>
        Fetch Greetings
      </button>
      <button style={{ backgroundColor: "green" }} onClick={setGreeting}>
        Set Greetings
      </button>
      </div>
      

      <input 
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Set Greeting Message"
      />

    <h2 className="greeting">Greeting: {currentGreeting}</h2>
      </div>
    </div>
  );
}

export default App;
