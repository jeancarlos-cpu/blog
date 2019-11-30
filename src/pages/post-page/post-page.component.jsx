import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/loading";
import "./post-page.styles.scss";
import Moment from "react-moment";
import toUpper from "../../utils/firstLettersToUpperCase";
import { useHistory } from "react-router-dom";

export const GET_POST_BY_ID = gql`
  query getPostById($id: ID!) {
    post(id: $id) {
      id
      title
      body
      author {
        id
        name
        profilePicture @client
      }
      createdAt
      comments {
        id
        text
        author {
          id
          name
          profilePicture @client
        }
        createdAt
      }
    }
  }
`;

const CREATE_COMMENT = gql`
  mutation createComment($text: String!, $id: ID!) {
    createComment(data: { text: $text, post: $id }) {
      id
      text
    }
  }
`;

export default () => {
  const { postId } = useParams();
  const history = useHistory();
  const [text, setText] = useState("");
  const [createComment] = useMutation(CREATE_COMMENT);
  const { data, loading, error } = useQuery(GET_POST_BY_ID, {
    variables: {
      id: postId
    }
  });

  if (loading) return <Loading />;
  if (error) return <div>error ;(</div>;
  const { post } = data;

  const handleClick = _ => {
    history.push(`/profile/${post.author.id}`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    createComment({ variables: { text, id: post.id } });
  };

  return (
    <div className="post-page-container">
      <h1 className="title">{post.title}</h1>
      <div className="author">
        <img src={post.author.profilePicture} alt="" onClick={handleClick} />
        <div>
          <h2 onClick={handleClick}>{toUpper(post.author.name)}</h2>
          <h3>
            <Moment fromNow>{post.createdAt}</Moment>
          </h3>
        </div>
      </div>
      <hr />
      <p className="body">{post.body}</p>
      <hr />
      <form action="" onSubmit={handleSubmit}>
      <h4>Leave us a comment</h4>
        <textarea
          className="comment-input"
          type="text"
          maxLength="200"
          onChange={({ target: { value } }) => setText(value)}
          required={true}
          placeholder="Comment..."
          rows={"4"}
          autofocus
        />
        <button>Send comment</button>
      </form>
      <hr />
      <div className="post-comments-container">
        <h2 className="title">Comments</h2>
        {post.comments.map(comment => (
          <div className="post-comment-container">
            <div className="profile-p">
              <img src={comment.author.profilePicture} alt="" />
              <spam>{comment.author.name}</spam>
            </div>
            <div className="text-p">
              <p>{comment.text}</p>
              <Moment className="push-right" fromNow>
                {comment.createdAt}
              </Moment>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
