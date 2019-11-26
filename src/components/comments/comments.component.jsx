import React from "react";
import Loading from "../loading/loading";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Moment from "react-moment";
import toUpper from "../../utils/firstLettersToUpperCase";
import "./comments.styles.scss";

export default () => {
  const { loading, error, data } = useQuery(GET_COMMENTS, {
    variables: { orderBy: "createdAt_DESC" }
  });
  if (error) return "Error :(";

  return (
    <div className="comments-container">
      <h1>Last Comments</h1>
      {loading ? (
        <Loading />
      ) : (
        data.comments.map((comment, index) => (
          <div className="comment-container" key={index}>
            <div className="comment-text">{comment.text}</div>
            <div className="date">
              <div>{toUpper(comment.author.name)}</div>
              <div>
                <Moment fromNow>{comment.createdAt}</Moment>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export const GET_COMMENTS = gql`
  query getComments($skip: Int, $orderBy: CommentOrderByInput) {
    comments(skip: $skip, orderBy: $orderBy) {
      id
      text
      author {
        name
      }
      createdAt
    }
  }
`;
