import React, { useState } from "react";

const Message = () => {
  const [showBox, setShowBox] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Surname:", surname);
    // Burada verileri göndermek veya başka bir işlem yapmak için kodlarınızı ekleyebilirsiniz.
  };

  return (
    <div>
      <img
        src="/img/message-icon.png"
        alt="Message Icon"
        onClick={toggleBox}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          cursor: "pointer",
        }}
      />
      {showBox && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            padding: "10px",
            background: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
            <br />
            <label htmlFor="surname">Surname:</label>
            <input
              type="text"
              id="surname"
              value={surname}
              onChange={handleSurnameChange}
            />
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Message;
