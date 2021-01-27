import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";
import "./ChatScreen.css";
import axios from "../../api/Axios";
function ChatScreen() {
  const [input, setInput] = useState("");
  const [messgaes, setMessages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/chats");
      console.log(req.data);
      setMessages(req.data);
    }
    fetchData();
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messgaes, { msgs: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p>YOU MATCHED WITH ELLEN ON 10/11/20</p>
      {messgaes.map((msg) => {
        return msg.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              src={msg.images}
              alt={msg.name}
            />
            <p className="chatScreen__text">{msg.msgs}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            {/* If it is without name thast means this chat is ours */}
            <p className="chatScreen__user">{msg.msgs}</p>
          </div>
        );
      })}

      <div>
        <form className="chatScreen__form">
          <input
            value={input}
            className="chatScreen__inputfield"
            type="text"
            placeholder="Type a message"
            onChange={(e) => setInput(e.target.value)}
          ></input>
          <button
            onClick={handleSend}
            type="submitt"
            className="chatScreen__btn"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
