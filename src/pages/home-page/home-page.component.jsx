import React from "react";
import UsersCard from "../../components/users/users.component";
import Posts from "../../components/posts/posts.component";
import Comments from "../../components/comments/comments.component";
import "./homepage.styles.scss";

export default () => (
  <>
    <div className="homepage-grid">
      <div className="users-grid">
        <UsersCard />
      </div>
      <div className="comments-grid">
        <Comments />
      </div>
      <div className="posts-grid">
        <Posts />
      </div>
    </div>
  </>
);
