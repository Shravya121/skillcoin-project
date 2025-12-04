


import React, { useState, useEffect } from "react";
import "../styles/wallet.css";

export default function Wallet() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState("0");

  // Connect wallet
  const connectWallet = async () => {
    if (!window.ethereum) return alert("Install MetaMask, cutie 💙");

    const res = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(res[0]);
  };

  // Fetch balance (placeholder)
  const loadBalance = async () => {
    // When backend is connected, fetch real SKC balance
    setBalance("120"); 
  };

  useEffect(() => {
    if (account) loadBalance();
  }, [account]);

  return (
    <div className="wallet-root">

      {/* BACKGROUND VIDEO */}
      <video
        className="wallet-bg-video"
        src="/assets/wallet-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="wallet-bg-overlay"></div>

      <h1 className="wallet-title">Your Wallet</h1>

      <div className="wallet-card floating-wallet">
        {account ? (
          <>
            <h3 className="wallet-address">
              {account.slice(0, 6)}...{account.slice(-4)}
            </h3>

            <p className="wallet-balance">{balance} SKC</p>

            <button className="wallet-refresh" onClick={loadBalance}>
              Refresh Balance
            </button>
          </>
        ) : (
          <>
            <p className="connect-text">Connect your MetaMask to view balance</p>
            <button className="wallet-connect" onClick={connectWallet}>
              Connect Wallet
            </button>
          </>
        )}
      </div>
    </div>
  );
}
