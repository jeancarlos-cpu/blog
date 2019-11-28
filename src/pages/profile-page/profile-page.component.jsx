import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../../components/loading/loading";
import PostsItems from "../../components/posts-items/posts-items.component";
import "./profile-page.styles.scss";
import upper from '../../utils/firstLettersToUpperCase';

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
      <div className="user-data">
        <img src={`https://robohash.org/${userId}?set=set2`} alt="" />
        <h2>{upper(user.name)}</h2>
      </div>
      <div className="posts">
        <h2>User Posts</h2>
        <PostsItems
          data={user}
          loading={loading}
          error={error}
          hasMorePosts={false}
        />
      </div>
    </div>
  );
};
