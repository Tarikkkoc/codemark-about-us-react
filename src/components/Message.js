import React, { useState } from "react";

const Message = () => {
  const [showBox, setShowBox] = useState(false);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", name);
    console.log("Mail:", mail);
    console.log("Phone Number:", phone);
    // Burada verileri göndermek veya başka bir işlem yapmak için kodlarınızı ekleyebilirsiniz.
  };

  return (
    <div>
      <img
        src="/img/message.svg"
        alt="Message Icon"
        onClick={toggleBox}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          cursor: "pointer",
          // Add maximum height for scrollable content
          overflowY: "auto", // Enable vertical scrolling
        }}
      />
      {showBox && (
        <div
          className="fixed rounded-xl bottom-24 right-5 p-2.5 overflow-y-auto"
          style={{
            background: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <form
            className="h-60 flex flex-col justify-between"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="İsminizi giriniz. (Zorunlu)"
              type="text"
              id="name"
              className="bg-message border-solid border-2 border-l-neutral-500 rounded-xl px-2 py-2"
              value={name}
              onChange={handleNameChange}
            />
            <br />
            <input
              placeholder="E-mail adresinizi giriniz. (Zorunlu)"
              type="text"
              id="mail"
              className="bg-message border-solid border-2 border-l-neutral-500 rounded-xl px-2 py-2"
              value={mail}
              onChange={handleMailChange}
            />
            <br />
            <input
              placeholder="Telefon numaranızı giriniz.(0****) (Zorunlu)"
              type="text"
              id="number"
              className="bg-message border-solid border-2 border-l-neutral-500 rounded-xl px-2 py-2"
              value={phone}
              onChange={handlePhoneChange}
            />
            <br />

            <button
              className="bg-secondary-gray rounded-xl hover:bg-slate-300 px-auto py-2.5"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Message;
