import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark px-3 shadow-sm"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img
          src="/logo.png"
          alt="logo"
          width="35"
          className="me-2"
        />
        <span className="fw-bold">SkillCoin</span>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/tasks">Tasks</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/wallet">Wallet</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/leaderboard">Leaderboard</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
