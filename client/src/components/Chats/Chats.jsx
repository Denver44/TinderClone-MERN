import React, { useState, useEffect } from "react";
import Chat from "./Chat/Chat";
import axios from "../../api/Axios";

function Chats() {
  const [ChatData, setChatData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/chatdata");
      console.log(req.data);
      setChatData(req.data);
    }
    fetchData();
  }, []);

  return (
    <div className="chats">
      {ChatData.map((info) => {
        return (
          <Chat
            name={info.name}
            messgae={info.messgae}
            timestamp={info.timestamp}
            profilePic={info.profilePic}
          />
        );
      })}
    </div>
  );
}

export default Chats;
