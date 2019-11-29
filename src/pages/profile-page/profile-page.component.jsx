import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import "./profile-page.styles.scss";
import upper from "../../utils/firstLettersToUpperCase";
import Loading from "../../components/loading/loading";
import Posts from "../../components/posts/posts.component";
import Comments from "../../components/comments/comments.component";

const GET_USER_BY_ID = gql`
  query getUser($query: String!) {
    users(query: $query) {
      id
      name
      posts {
        id
        title
        body
        createdAt
        author {
          id
          name
        }
      }
      comments {
        id
        text
        createdAt
        author {
          id
          name
        }
      }
    }
  }
`;

export default () => {
  const { userId } = useParams();
  const { data, loading, error } = useQuery(GET_USER_BY_ID, {
    variables: {
      query: userId
    }
  });

  if (loading) return <Loading />;
  if (error) return <div>Error ;(</div>;
  const user = data.users[0];
  console.log(user);

  return (
    <div className="profile">
      <div className="pic-grid">
        <img src={`https://robohash.org/${userId}?set=set2`} alt="" />
        <h2>{upper(user.name)}</h2>
      </div>
      <div className="comments-grid">
        <Comments data={user} loading={loading} error={error} />
      </div>
      <div className="posts-grid">
        <h2>User Posts</h2>
        <Posts
          data={user}
          loading={loading}
          error={error}
          hasMorePosts={false}
        />
      </div>
    </div>
  );
};
