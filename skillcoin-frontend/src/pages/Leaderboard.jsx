import React, { useEffect, useState } from "react";
import "./../styles/leaderboard.css";

export default function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    // Fake Leaderboard Data
    const demo = [
      { name: "Shravya", score: 920 },
      { name: "Rahul", score: 860 },
      { name: "Aisha", score: 820 },
      { name: "Karan", score: 780 },
    ];

    setLeaders(demo);
  }, []);

  return (
    <div className="leaderboard-container">
      <h1 className="lb-title">Top SkillCoin Earners</h1>

      <div className="lb-list">
        {leaders.map((user, i) => (
          <div key={i} className="lb-card">
            <span className="rank">#{i + 1}</span>
            <span className="name">{user.name}</span>
            <span className="score">{user.score} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
}
