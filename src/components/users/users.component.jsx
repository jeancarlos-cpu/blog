import React from "react";
import Loading from "../loading/loading";
import { useQuery } from "@apollo/react-hooks";
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
    }
  }
`;

export default () => {
  const { data, loading, error } = useQuery(GET_NEW_USERS, {
    variables: { orderBy: "createdAt_DESC", first: 3 }
  });
  if (error) return "Error :(";
  return (
    <div className="users-container">
      <h1>New Users</h1>
      {loading ? (
        <Loading />
      ) : (
        data.users.map((user, index) => (
          <div key={index}>
            <div className="roboimg">
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=65x70`}
                alt=""
              />
            </div>
            <div>
              <h1>{firstToUpperCase(user.name)}</h1>
              <span>
                <Moment
                  format="DD/MM/YYYY hh:mm:ss"
                  date={user.createdAt}
                  tz={"America/Sao_Paulo"}
                />
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
