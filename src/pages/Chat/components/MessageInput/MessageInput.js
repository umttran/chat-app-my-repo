import React from "react";

import "./MessageInput.css";

function MessageInput () {
  return (
    <div className="message-input">
      <input class="message-input-text" placeholder="Type"></input>
      <button class="message-input-button" type="submit"> Send</button>
    </div>
  )
}

export default  MessageInput;