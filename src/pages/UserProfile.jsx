import React, { useEffect, useState } from "react";
import { Loader } from "../components/Loader";
import { useParams } from "react-router-dom";

//import axois
import axios from "axios";

export const UserProfile = () => {
  const TokenApi = process.env.REACT_APP_GITHUB_TOKEN_API;
  let params = useParams();
  let [UserDetails, setUserDetails] = useState([]);
  let [wating, setWating] = useState(false);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    await axios
      .get(`https://api.github.com/users/${params.UserProfile}`, {
        Headers: {
          Authorization: `token ${TokenApi}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        setUserDetails(response.data);
        setWating(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!wating) {
    <div className="text-center pt-10">
      <Loader />
    </div>;
  }

  return (
    <div class="hero min-h-screen">
      <div class="text-center hero-content">
        <div class="max-w-md">
          <img src={UserDetails.avatar_url} alt="" />
          <a class="link link-secondary link-hover" href={UserDetails.html_url}>
            <h1 class="mb-5 text-5xl font-bold">{UserDetails.login}</h1>
          </a>
          {/* info */}
          <div class="w-full shadow stats">
            <div class="stat place-items-center place-content-center">
              <div class="stat-title">followers</div>
              <div class="stat-value">{UserDetails.followers}</div>
            </div>
            <div class="stat place-items-center place-content-center">
              <div class="stat-title">following</div>
              <div class="stat-value text-success">{UserDetails.following}</div>
            </div>
            <div class="stat place-items-center place-content-center">
              <div class="stat-title">public repos</div>
              <div class="stat-value text-error">
                {UserDetails.public_repos}
              </div>
            </div>
          </div>
          {/* end info */}
        </div>
      </div>
    </div>
  );
};
