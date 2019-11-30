import React from "react";
import Loading from "../loading/loading";
import { useQuery } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import { gql } from "apollo-boost";
import Moment from "react-moment";
import "moment-timezone";
import firstToUpperCase from "../../utils/firstLettersToUpperCase";
import "./users.styles.scss";

export const GET_NEW_USERS = gql`
  query newUsers($orderBy: UserOrderByInput, $first: Int) {
    users(orderBy: $orderBy, first: $first) {
      id
      name
      createdAt
      profilePicture @client
    }
  }
`;

export default () => {
  const history = useHistory();
  const a = useQuery(GET_NEW_USERS, {
    variables: { orderBy: "createdAt_DESC", first: 3 }
  });
  if (a.error) return "Error :(";
  if (a.loading) return "Error :(";
  console.log(a);
  return (
    <div className="users-container">
      <h1>New Users</h1>
      {a.loading ? (
        <Loading />
      ) : (
        a.data.users.map(user => (
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
