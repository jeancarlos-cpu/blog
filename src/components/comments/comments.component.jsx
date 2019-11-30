import React from "react";
import Loading from "../loading/loading";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import toUpper from "../../utils/firstLettersToUpperCase";
import "./comments.styles.scss";

export default ({ loading, error, data }) => {
  if (error) return "Error :(";
  const history = useHistory();
  console.log(data);

  return (
    <div className="comments-container">
      <h1>Last Comments</h1>
      {loading ? (
        <Loading />
      ) : (
        data.comments.map((comment, index) => (
          <div
            onClick={() => history.push(`/profile/${comment.author.id}`)}
            className="comment-container"
            key={index}
          >
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
