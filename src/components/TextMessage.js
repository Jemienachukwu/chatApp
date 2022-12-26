import React from "react";

const TextMessage = () => {
  return (
    <div className="textMessage inverse">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/13616572/pexels-photo-13616572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="img"
        />
        <spam>just now</spam>
      </div>
      <div className="messageContent">
        <p>hi there good looking</p>
        <img
          src="https://images.pexels.com/photos/13616572/pexels-photo-13616572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="img"
        />
      </div>
    </div>
  );
};

export default TextMessage;
