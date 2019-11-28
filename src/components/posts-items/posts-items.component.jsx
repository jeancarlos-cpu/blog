import React from "react";
import { useHistory } from "react-router-dom";
import Loading from "../loading/loading";
import Moment from "react-moment";
import toUpper from "../../utils/firstLettersToUpperCase";
import "./posts-items.styles.scss";

export default ({ data, loading, error, handleLoadMore, hasMorePosts }) => {
  if (loading) return <Loading />;
  if (error) return "Error :(";

  const history = useHistory();

  return (
    <div className="posts-container">
      {data.posts.map(post => (
        <div className="post-container" key={post.id}>
          <div className="post-title">
            <div>{post.title}</div>
            <div className="date">
              <Moment fromNow>{post.createdAt}</Moment>
            </div>
          </div>
          <div className="post-body">{post.body.slice(0, 350) + "..."}</div>
          <div className="post-footer">
            Author:{" "}
            <span onClick={() => history.push(`/profile/${post.author.id}`)}>
              {toUpper(post.author.name)}
            </span>
          </div>
        </div>
      ))}
      <button
        className="load-more"
        onClick={handleLoadMore}
        style={!hasMorePosts ? { display: "none" } : null}
      >
        Load more
      </button>
    </div>
  );
};
