import React, { useState } from "react";
import "./App.css";
import love from "./assets/love.png";

function App() {
    const [noStyle, setNoStyle] = useState({});

    const moveNoButton = () => {
        const x = Math.random() * 300 - 150;
        const y = Math.random() * 300 - 150;

        setNoStyle({
            transform: `translate(${x}px, ${y}px)`
        });
    };

    const handleYes = () => {
        alert("Yayyy! 💖 You are my Valentine 🥰");
    };

    return (
        <div className="container">
            <img src={love} alt="Love" className="love-img" />

            <h1>Will you be my Valentine? 💕</h1>

            <div className="buttons">
                <button className="yes" onClick={handleYes}>
                    Yes 💖
                </button>

                <button
                    className="no"
                    style={noStyle}
                    onMouseEnter={moveNoButton}
                >
                    No 😢
                </button>
            </div>
        </div>
    );
}

export default App;
