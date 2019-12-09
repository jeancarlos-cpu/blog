import React from "react";
import { useHistory } from "react-router-dom";
import Loading from "../loading/loading";
import Buttom from "../buttom/buttom.component";
import Moment from "react-moment";
import toUpper from "../../utils/firstLettersToUpperCase";
import styled from "styled-components";
import "./posts.styles.scss";

export default ({ data, loading, error, handleLoadMore, hasMorePosts }) => {
  if (loading) return <Loading />;
  if (error) return "Error :(";

  const history = useHistory();

  return (
    <div className="posts-container">
      {data.posts.map(post => (
        <div className="post-container" key={post.id}>
          <div className="post-title">
            <div
              className="title"
              onClick={() => history.push(`/post/${post.id}`)}
            >
              {post.title}
            </div>
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
      <Buttom
        onClick={handleLoadMore}
        style={!hasMorePosts ? { display: "none" } : null}
      >
        Load more
      </Buttom>
    </div>
  );
};

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background2);
  border-radius: 10px;
  padding: 10px 0;
  overflow-y: scroll;
  max-height: 80vh;
`;

const PostContainer = styled.div`
  background: var(--background1);
  border-radius: 5px;
  margin: 0 15px 15px 15px;
  padding: 10px;
  vertical-align: center;
`;

const PostHeader = styled.div`
  font-size: 40px;
  color: var(--stroke);
  font-weight: 600;
  background: var(--background);
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  .title {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  .date {
    font-size: 15px;
    color: var(--paragraphy);
  }
`;

const styledMoment = styled(Moment)`
  font-size: 15px;
  color: var(--paragraphy);
`;
