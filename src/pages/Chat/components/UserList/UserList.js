import React from "react";

import "./UserList.css"

function UserList() {
  return (
    <div className="user-list">
      <div className="user-list-content">
        <div className="user-pp">
        </div>
        <div className="user-info">
          <h4>John Doe</h4>
          <p>Eğitimler nasıl gidiyor?</p>
        </div>
      </div>
      <div className="user-list-content">
        <div className="user-pp">
        </div>
        <div className="user-info">
          <h4>Mark</h4>
          <p>Eğitimler nasıl gidiyor?</p>
        </div>
      </div>
      <div className="user-list-content">
        <div className="user-pp">
        </div>
        <div className="user-info">
          <h4>Lorem</h4>
          <p>Eğitimler nasıl gidiyor?</p>
        </div>
      </div>
    </div>
  )
}



export default UserList;