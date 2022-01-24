import React, { useEffect, useContext, useState } from "react";
import { ListUsers } from "../components/ListUsers";
import UserList from "../context/UserList";

export const Home = () => {
  const { isLoading, UsersList, GetUsersList } = useContext(UserList);
  const [text, SetText] = useState("");

  const handleInput = (event) => {
    SetText(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    GetUsersList(text);
  };

  return (
    <div>
      <div className="container mx-auto py-52 ">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="username"
                className="w-full input input-neutral input-bordered "
                onChange={handleInput}
                value={text}
              />
              <button type="submit" className="btn btn-neutral">
                Search
              </button>
            </div>
          </div>
        </form>

        <ListUsers />
      </div>
    </div>
  );
};
