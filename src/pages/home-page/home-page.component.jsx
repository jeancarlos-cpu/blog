import React, {useState} from "react";
import UsersCard from "../../components/users/users.component";
import Posts from "../../components/posts/posts.component";
import Comments from "../../components/comments/comments.component";
import "./homepage.styles.scss";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

export const GET_COMMENTS = gql`
  query getComments($skip: Int, $orderBy: CommentOrderByInput) {
    comments(skip: $skip, orderBy: $orderBy) {
      id
      text
      author {
        id
        name
      }
      createdAt
    }
  }
`;

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

export default () => {
  const commentsQuery = useQuery(GET_COMMENTS, {
    variables: { orderBy: "createdAt_DESC" }
  });

  const postsQuery = useQuery(GET_POSTS, {
    variables: { orderBy: "createdAt_DESC", first: 6 }
  });

  const [hasMorePosts, sethasMorePosts] = useState(true);

  const handleLoadMore = () => {
    postsQuery.fetchMore({
      variables: {
        skip: postsQuery.data.posts.length,
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
    <>
      <div className="homepage-grid">
        <div className="users-grid">
          <UsersCard />
        </div>
        <div className="comments-grid">
          <Comments
            data={commentsQuery.data}
            loading={commentsQuery.loading}
            error={commentsQuery.error}
          />
        </div>
        <div className="posts-grid">
          <Posts
            data={postsQuery.data}
            loading={postsQuery.loading}
            error={postsQuery.error}
            hasMorePosts={hasMorePosts}
            handleLoadMore={handleLoadMore}
          />
        </div>
      </div>
    </>
  );
};
