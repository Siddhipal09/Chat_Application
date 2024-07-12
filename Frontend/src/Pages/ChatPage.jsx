import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/chat");
      console.log(res.data);
      setChats(res.data.data || res.data);
      // setChats(res.data.data);
    } catch (error) {
      console.error("Error fetching chats:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats && chats.length > 0 ? (
        chats.map((chat) => <div key={chat._id}>{chat.chatName}</div>)
      ) : (
        <div>No chats available</div>
      )}
    </div>
  );
};

export default ChatPage;
