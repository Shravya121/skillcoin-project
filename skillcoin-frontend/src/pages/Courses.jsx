import React, { useEffect } from "react";
import "../styles/courses.css";

export default function Courses() {

  // ⭐ Soft horizontal movement on scroll
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".course-card").forEach((card, i) => {
        card.style.transform = `translateX(${window.scrollY * 0.04 * (i % 2 === 0 ? 1 : -1)}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const courses = [
    { title: "Web Development", icon: "bi-globe2", desc: "HTML, CSS, JS, React, Backend" },
    { title: "Blockchain", icon: "bi-currency-bitcoin", desc: "Solidity, Smart Contracts, Web3" },
    { title: "AI / Machine Learning", icon: "bi-cpu", desc: "ML models, sklearn, neural nets" },
    { title: "Data Structures", icon: "bi-diagram-3", desc: "DSA fundamentals & mastery" },
    { title: "Cybersecurity", icon: "bi-shield-lock", desc: "Protect, audit & secure systems" },
    { title: "Problem Solving", icon: "bi-lightbulb", desc: "Logic, patterns, algorithms" },
    { title: "UI / UX Design", icon: "bi-palette", desc: "Design stunning interfaces" },
    { title: "Cloud Computing", icon: "bi-cloud-upload", desc: "AWS, Azure, DevOps basics" },
  ];

  return (
    <div className="courses-root">
        {/* BACKGROUND VIDEO */}
<video
  className="courses-bg-video"
  src="/assets/courses.mp4"
  autoPlay
  loop
  muted
  playsInline
/>
<div className="courses-bg-overlay"></div>


      <h1 className="courses-title">Explore Courses</h1>
      <div className="underline"></div>

      <div className="courses-grid">
        {courses.map((c, i) => (
          <div className="course-card" key={i}>
            <i className={`bi ${c.icon} course-icon`}></i>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <button className="course-btn">Start</button>
          </div>
        ))}
      </div>
    </div>
  );
}
