import React, { useState, useEffect } from "react";
import "../styles/tasks.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fake tasks (until backend)
    const demo = [
      {
        title: "Complete Blockchain Basics",
        reward: 50,
        desc: "Watch videos and clear the quiz.",
        progress: 20,
      },
      {
        title: "JavaScript Mastery Challenge",
        reward: 30,
        desc: "Finish all JS interactive exercises.",
        progress: 60,
      },
      {
        title: "Build Your First Smart Contract",
        reward: 80,
        desc: "Write and deploy a Solidity contract.",
        progress: 0,
      },
    ];
    setTasks(demo);
  }, []);

  return (
    <div className="tasks-page">
      <h1 className="tasks-title">Your Skill Tasks</h1>

      <div className="tasks-container">
        {tasks.map((task, i) => (
          <div
            className="task-card fade-in-up"
            key={i}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <h3 className="task-title">{task.title}</h3>
            <p className="task-desc">{task.desc}</p>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>

            <p className="task-reward">Reward: {task.reward} SKC</p>

            <button className="claim-btn">
              <i className="bi bi-lightning-charge-fill"></i> Earn SkillCoin
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
