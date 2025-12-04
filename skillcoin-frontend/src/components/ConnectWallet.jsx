import React, { useState } from "react";

function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);
        console.log("Connected:", accounts[0]);
      } catch (error) {
        console.error("User rejected or error occurred:", error);
      }
    } else {
      alert("MetaMask not detected! Install it first.");
    }
  };

  return (
    <div>
      <button 
        onClick={connectWallet} 
        style={{
          padding: "10px 20px",
          background: "#6c5ce7",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        Connect Wallet
      </button>

      {walletAddress && (
        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          Connected: {walletAddress}
        </p>
      )}
    </div>
  );
}

export default ConnectWallet;
