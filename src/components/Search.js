import React from "react";

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const img = { height: "35px", width: "35px", objectFit: "cover" };

  return (
    <div className="border-bottom-1">
      <div className="border-bottom border-dark my-2">
        <input
          type="search"
          placeholder="find user"
          className="bg-transparent border-bottom-1 border-0 text-dark p-2 w-90"
          style={{ width: "90%" }}
        />

        <AiOutlineSearch />
      </div>
      <div className="mt-3 p-3 d-flex align-items-center " id="message-hover">
        <img
          style={img}
          className="rounded-circle"
          alt="img"
          src="https://images.pexels.com/photos/13616572/pexels-photo-13616572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
        <div className="mx-3">
          <span>Jemienachukwu</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
