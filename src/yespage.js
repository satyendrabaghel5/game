import React from "react";
import "./App.css";

function YesPage() {
    return (
        <div className="container">
            <h1>Yayyy! 💖 You are my Valentine 🥰</h1>

            <p style={{ fontSize: "20px", textAlign: "center", marginTop: "15px" }}>
                You just made my heart special 💕 <br />
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
