import React from "react";

const Chats = () => {
  const img = { height: "35px", width: "35px", objectFit: "cover" };

  return (
    <div className="border-bottom-1">
      <div className="mt-2 p-2 d-flex align-items-center " id="message-hover">
        <img
          style={img}
          className="rounded-circle"
          alt="img"
          src="https://images.pexels.com/photos/13616572/pexels-photo-13616572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <div className="mx-3">
          <span>Jemienachukwu</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
