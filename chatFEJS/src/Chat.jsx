import React, { useState, useEffect, useRef } from "react";
import useSignalR from "./signalR.js";

import ChatWindow from "./ChatWindow.jsx";
import ChatInput from "./ChatInput.jsx";

const Chat = () => {
  const { connection } = useSignalR("/r/chat");
  const [chat, setChat] = useState([]);


  useEffect(() => {
    if (!connection) {
      return
    }
    connection.on("ReceiveMessages", (message) => {
      console.log(message)
    })
  }, [connection])


  const sendMessage = async (user, message) => {
    if (connection) {
      try {
        await connection.invoke("SendMessage", message, user);
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("No connection to server yet.");
    }
  };

  return (
    <div>
        <h1>SignalR Chat</h1>
        <p>{connection ? "Connected" : "Not connected"}</p>
      <ChatInput sendMessage={sendMessage} />
      <hr />
      <ChatWindow chat={chat} />
    </div>
  );
};

export default Chat;
