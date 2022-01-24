import { createContext, useState, useEffect } from "react";
// import { axios } from "axios";
const axios = require("axios");
// create context
const UserList = createContext();
const UrlApi = process.env.REACT_APP_GITHUB_URL;
const TokenApi = process.env.REACT_APP_GITHUB_URL;

export const UserListProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [UsersList, setUserList] = useState([]);

  const GetUsersList = async (name) => {
    setIsLoading(true);
    await axios
      .get(`${UrlApi}/search/users?q=${name}`, {
        Headers: {
          Authorization: `token ${TokenApi}`,
        },
      })
      .then(function (response) {
        setUserList(response.data.items);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <UserList.Provider value={{ isLoading, UsersList, GetUsersList }}>
      {children}
    </UserList.Provider>
  );
};

export default UserList;
