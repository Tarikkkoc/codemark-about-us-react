import React from "react";

const WelcomeBox = () => {
  return (
    <div
      className="message"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "85px",
        padding: "10px",
        background: "#f9f9f9",
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    >
      <h3>Hoşgeldiniz</h3>
      <h6>Size nasıl yardımcı olabilirim?</h6>
    </div>
  );
};

export default WelcomeBox;
