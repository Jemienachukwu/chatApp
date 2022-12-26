import React from "react";
import {
  AiOutlinePlusCircle,
  AiFillFileImage,
  AiOutlineSend,
} from "react-icons/ai";

const Inpute = () => {
  return (
    <div className="input">
      <input typr="text" placeholder="enter messsage" />
      <div className="send">
        <AiOutlinePlusCircle style={{ cursor: "pointer" }} />
        <inpute type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="id">
          <AiFillFileImage style={{ cursor: "pointer" }} />
        </label>
        <div>
          <AiOutlineSend style={{ cursor: "pointer" }} />
        </div>
      </div>
    </div>
  );
};

export default Inpute;
