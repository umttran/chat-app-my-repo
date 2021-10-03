import React from "react";

import "./Messages.css"

function Messages () {
  return (
    <div className="messages">
      <div className="messages-incoming"><p>Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.asdf</p></div>
      <div className="messages-incoming" ><p>Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.asdf</p></div>
      <div className="messages-incoming"><p>Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.asdf</p></div>
      <div className="messages-outgoing"><p>Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.asdf</p></div>
      <div className="messages-outgoing"><p>Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.asdf<br />
Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.asdf<br />
Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.asdf<br />
Lorem ipsum dolor si amet. Lorem ipsum dolor si amet. Lorem ipsum dolor si amet.asdf</p></div>
    </div>
  )
}

export default  Messages;