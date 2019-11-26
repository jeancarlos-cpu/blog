import React from "react";
import Header from "../../components/header/header.component";
import UsersCard from "../../components/users/users.component";
import Posts from "../../components/posts/posts.component";
import Comments from "../../components/comments/comments.component";
import Footer from "../../components/footer/footer.component";
import "./homepage.styles.scss";

export default () => (
  <>
    <Header />
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
      <Footer/>
  </>
);
