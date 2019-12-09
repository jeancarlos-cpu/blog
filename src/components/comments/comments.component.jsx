import React from "react";
import Loading from "../loading/loading";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import toUpper from "../../utils/firstLettersToUpperCase";
import styled from "styled-components";

export default ({ loading, error, data }) => {
  if (error) return "Error :(";
  const history = useHistory();

  return (
    <CommentsContainer>
      <Header>Last Comments</Header>
      {loading ? (
        <Loading />
      ) : (
        data.comments.map((comment, index) => (
          <CommentCointainer
            onClick={() => history.push(`/profile/${comment.author.id}`)}
            className="comment-container"
            key={index}
          >
            <div>{comment.text}</div>
            <StyledDate>
              <div>{toUpper(comment.author.name)}</div>
              <div>
                <Moment fromNow>{comment.createdAt}</Moment>
              </div>
            </StyledDate>
          </CommentCointainer>
        ))
      )}
    </CommentsContainer>
  );
};

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px 15px 10px;
  border-radius: 10px;
  background: var(--background2);
  cursor: pointer;
`;

const Header = styled.h1`
  margin: 5px;
  font-size: 1.3em;
  text-align: center;
  color: var(--stroke);
`;

const CommentCointainer = styled.div`
  border-radius: 10px;
  margin: 5px 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  font-size: 18px;
  border-radius: 5px;
  background-color: var(--background1);
  padding: 4px;
  overflow-wrap: break-word;
`;

const StyledDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
`;
