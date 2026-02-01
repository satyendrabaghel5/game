import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import love from "./1.png";

function App() {
    const [noStyle, setNoStyle] = useState({});
    const noBtnRef = useRef(null);
    const wrapperRef = useRef(null);

    const moveNoButton = () => {
        const wrapper = wrapperRef.current;
        const btn = noBtnRef.current;
        if (!wrapper || !btn) return;

        const wrapperRect = wrapper.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        const maxX = wrapperRect.width - btnRect.width;
        const maxY = wrapperRect.height - btnRect.height;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        setNoStyle({
            left: `${x}px`,
            top: `${y}px`,
        });
    };

    useEffect(() => {
        const handleMove = (x, y) => {
            const btn = noBtnRef.current;
            if (!btn) return;

            const rect = btn.getBoundingClientRect();
            const dx = Math.abs(x - (rect.left + rect.width / 2));
            const dy = Math.abs(y - (rect.top + rect.height / 2));

            const range = 120;
            if (dx < range && dy < range) {
                moveNoButton();
            }
        };

        const mouseMove = (e) => handleMove(e.clientX, e.clientY);

        const touchMove = (e) => {
            if (e.touches.length > 0) {
                handleMove(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("touchmove", touchMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("touchmove", touchMove);
        };
    }, []);

    const handleYes = () => {
        alert("Yayyy! 💖 You are my Valentine 🥰");
    };

    const icons = ["💖", "💋", "💕", "💓"];

    return (
        <div className="container">
            <div className="floating-bg">
                {Array.from({ length: 25 }).map((_, i) => (
                    <span
                        key={i}
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${6 + Math.random() * 6}s`,
                            fontSize: `${18 + Math.random() * 30}px`,
                        }}
                    >
                        {icons[Math.floor(Math.random() * icons.length)]}
                    </span>
                ))}
            </div>

            <img src={love} alt="Love" className="love-img" />
            <h1>Hiiiii Seju , Will you be my Valentine? 💕</h1>

            <div className="buttons" ref={wrapperRef}>
                <button className="yes" onClick={handleYes}>
                    Yes 💖
                </button>

                <button
                    ref={noBtnRef}
                    className="no"
                    style={noStyle}
                >
                    No 😢
                </button>
            </div>
        </div>
    );
}
export default App;
