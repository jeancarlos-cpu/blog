import React, { useState } from "react";
import PostsItems from "../posts-items/posts-items.component";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
          console.log("foi");
          return prev;
        }
        return {
          posts: [...prev.posts, ...fetchMoreResult.posts]
        };
      }
    });
  };

  return (
    <PostsItems
      data={data}
      loading={loading}
      error={error}
      hasMorePosts={hasMorePosts}
      handleLoadMore={handleLoadMore}
    />
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
