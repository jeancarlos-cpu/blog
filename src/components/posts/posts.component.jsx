import React, { useState } from "react";
import Loading from "../loading/loading";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Moment from "react-moment";
import toUpper from "../../utils/firstLettersToUpperCase";
import "./posts.styles.scss";

export default () => {
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { orderBy: "createdAt_DESC", first: 6 }
  });

  const [hasMorePosts, sethasMorePosts] = useState(true);

  const handleLoadMore = () => {
    fetchMore({
      variables: {
        skip: data.posts.length,
        first: 3
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.posts.length) {
          sethasMorePosts(false);
          console.log('foi')
          return prev;
        }
        return {
          posts: [...prev.posts, ...fetchMoreResult.posts]
        };
      }
    });
  };

  if (loading) return <Loading />;
  if (error) return "Error :(";
  return (
    <div className="posts-container">
      {data.posts.map((post, index) => (
        <div className="post-container" key={index}>
          <div className="post-title">
            <div>{post.title}</div>
            <div className="date">
              <Moment fromNow>{post.createdAt}</Moment>
            </div>
          </div>
          <div className="post-body">{post.body}</div>
          <div className="post-footer">Author: {toUpper(post.author.name)}</div>
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

export const GET_POSTS = gql`
  query getPosts($first: Int, $skip: Int, $orderBy: PostOrderByInput) {
    posts(first: $first, skip: $skip, orderBy: $orderBy) {
      id
      title
      body
      createdAt
      author {
        id
        name
      }
    }
  }
`;
