import { useContext } from "react";
import { Loader } from "../components/Loader";
import { Link } from "react-router-dom";
// import { useContext } from "react";
import UserList from "../context/UserList";
export const ListUsers = () => {
  const { isLoading, UsersList, GetUsersList } = useContext(UserList);

  if (isLoading) {
    return (
      <div className="text-center pt-10">
        <Loader />
      </div>
    );
  }

  return (
    <div className="text-center pt-10">
      <div className="grid grid-cols-4 gap-4">
        {UsersList.map((user) => (
          <div
            className="card card-bordered card-compact lg:card-normal"
            key={user.id}
          >
            <figure>
              <img src={user.avatar_url} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {user.login}
                <div className="badge mx-2 badge-secondary">{user.type}</div>
              </h2>
              <div className="justify-center card-actions">
                <Link
                  className="btn btn-secondary"
                  to={`UserProfile/${user.login}`}
                >
                  See profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
