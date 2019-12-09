import React, { useState } from "react";
import UsersCard from "../../components/users/users.component";
import Posts from "../../components/posts/posts.component";
import Comments from "../../components/comments/comments.component";
import "./homepage.styles.scss";
import { useQuery } from "@apollo/react-hooks";
import { GET_COMMENTS, GET_POSTS } from "../../graphql/queries";

export default () => {
  const commentsQuery = useQuery(GET_COMMENTS, {
    variables: { orderBy: "createdAt_DESC", first: 5 }
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
