import React from "react";
import { Avatar } from "@material-ui/core";
import "./chat.css";
import { Link } from "react-router-dom";

function Chat({ id, name, messgae, timestamp, profilePic }) {
  return (
    // linking of chat user.
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" src={profilePic} />
        <div className="chat__details">
          <h3>{name}</h3>
          <p>{messgae}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
}

export default Chat;
