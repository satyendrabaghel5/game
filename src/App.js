import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import love from "./1.png";
import YesPage from "./yespage";

function Home() {
    const [noStyle, setNoStyle] = useState({});
    const noBtnRef = useRef(null);
    const wrapperRef = useRef(null);
    const navigate = useNavigate();

    const moveNoButton = () => {
        const wrapper = wrapperRef.current;
        const btn = noBtnRef.current;
        if (!wrapper || !btn) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        const maxX = wrapperRect.width - btnRect.width;
        const maxY = wrapperRect.height - btnRect.height;

        setNoStyle({
            left: `${Math.random() * maxX}px`,
            top: `${Math.random() * maxY}px`,
        });
    };

    useEffect(() => {
        const handleMove = (x, y) => {
            const btn = noBtnRef.current;
            if (!btn) return;

            const rect = btn.getBoundingClientRect();
            const dx = Math.abs(x - (rect.left + rect.width / 2));
            const dy = Math.abs(y - (rect.top + rect.height / 2));

            if (dx < 120 && dy < 120) moveNoButton();
        };

        window.addEventListener("mousemove", e => handleMove(e.clientX, e.clientY));
        window.addEventListener("touchmove", e => {
            if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
        });

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleMove);
        };
    }, []);

    return (
        <div className="container">
            <img src={love} alt="Love" className="love-img" />
            <h1>Hiiiii Seju, Will you be my Valentine? 💕</h1>

            <div className="buttons" ref={wrapperRef}>
                <button className="yes" onClick={() => navigate("/yes")}>
                    Yes 💖
                </button>

                <button ref={noBtnRef} className="no" style={noStyle}>
                    No 😢
                </button>
            </div>
        </div>
    );
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/yes" element={<YesPage />} />
            </Routes>
        </Router>
    );
}
