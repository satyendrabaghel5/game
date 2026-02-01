import React from "react";
import "./App.css";

const icons = ["💖", "💋", "💕", "💓"];

function YesPage() {
    return (
        <div className="container">
            {/* ❤️ Floating Hearts */}
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

            <h1>Yayyy! 💖 You are my Valentine 🥰</h1>

            <p style={{ fontSize: "20px", textAlign: "center", marginTop: "15px" }}>
                You just made my heart so happy 💕 <br />
                Let’s make this Valentine unforgettable ✨
            </p>

            <img
                src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
                alt="Love gif"
                className="love-img"
            />
        </div>
    );
}

export default YesPage;
