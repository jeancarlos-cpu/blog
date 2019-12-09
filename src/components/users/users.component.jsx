import React from "react";
import Loading from "../loading/loading";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";
import firstToUpperCase from "../../utils/firstLettersToUpperCase";
import "./users.styles.scss";
import { GET_USERS } from "../../graphql/queries";

export default () => {
  const history = useHistory();
  const { data, error, loading } = useQuery(GET_USERS, {
    variables: { orderBy: "createdAt_DESC", first: 3 }
  });
  if (error) return "Error :(";
  return (
    <div className="users-container">
      <h1>New Users</h1>
      {loading ? (
        <Loading />
      ) : (
        data.users.map(user => (
          <div
            className="user-container"
            key={user.id}
            onClick={() => history.push(`profile/${user.id}`)}
          >
            <div className="userimg">
              <img src={user.profilePicture} alt="" />
            </div>
            <div className="profile">
              <h1 className="name">{firstToUpperCase(user.name)}</h1>
              <span>
                <Moment fromNow>{user.createdAt}</Moment>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
