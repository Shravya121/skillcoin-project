import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      const res = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(res[0]);
    } else {
      alert("Please install MetaMask.");
    }
  };

  // ⭐ PARALLAX
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll("[data-speed]").forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed"));
        const offset = window.scrollY * (speed / 100);
        el.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ⭐ CARDS
  const cards = [
    { id: 1, title: "Courses", subtitle: "Start your learning journey", icon: "bi-journal-code" },
    { id: 2, title: "Tasks", subtitle: "Complete quests & earn SKC", icon: "bi-list-check" },
    { id: 3, title: "Wallet", subtitle: "View your balance & transactions", icon: "bi-wallet2" },
    { id: 4, title: "Leaderboard", subtitle: "Top earners & progress", icon: "bi-trophy" },
  ];

  return (
    <div className="hero-root">

      {/* BACKGROUND VIDEO */}
      <video
        className="bg-video"
        src="/assets/globe.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="bg-overlay"></div>

      {/* HERO */}
      <div className="container hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            <span>Forge</span>
            <span>Your</span>
            <span>Skill</span>
          </h1>

          <p className="hero-sub">
            Step into the realm of SkillCoin — learn, master, and earn blockchain rewards.
          </p>

          {!account ? (
            <button className="hero-cta" onClick={connectWallet}>
              <i className="bi bi-wallet2 me-2" /> Connect Wallet
            </button>
          ) : (
            <div className="connected-badge">
              Connected: {account.slice(0, 8)}...
            </div>
          )}
        </div>
      </div>

      {/* ⭐ SCROLL ANIMATED SKILLCOIN TEXT ⭐ */}
      <div className="skillcoin-section" data-speed="4">
        <h1 className="skillcoin-heading">SkillCoin</h1>
        <p className="skillcoin-sub">Earn while you learn</p>

        {/* GLASS CARD */}
       <div className="skillcoin-card">
  <video
    className="skillcoin-video"
    src="/assets/skill.mp4"
    autoPlay
    loop
    muted
    playsInline
  />
</div>

      </div>

      {/* FLOATING CARDS */}
      <section className="cards-row-wrapper">
        <div className="cards-row">
          {cards.map((card, i) => (
            <div
              className="floating-card"
              key={card.id}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="card-icon">
                <i className={`bi ${card.icon}`} />
              </div>

              <h5>{card.title}</h5>
              <p className="card-sub">{card.subtitle}</p>

              <div className="card-cta">
                <Link to={`/${card.title.toLowerCase()}`} className="btn-link">
                  Open
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

