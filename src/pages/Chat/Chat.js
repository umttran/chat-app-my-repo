import React from "react";

import Messages from "./components/Messages/Messages";
import MessageInput from "./components/MessageInput/MessageInput";
import SearchInput from "./components/SearchInput/SearchInput";
import Settings from "./components/Settings/Settings";
import UserHeader from "./components/UserHeader/UserHeader";
import UserList from "./components/UserList/UserList";

import "./Chat.css";

function Chat() {

  return (
   <div className="chat-container">
     <div className="left-side">
       <SearchInput />
       <UserList />
       <Settings />
     </div>
     <div className="right-side">
       <UserHeader />
       <Messages />
       <MessageInput />
     </div>
   </div>
   )
}

export default Chat;