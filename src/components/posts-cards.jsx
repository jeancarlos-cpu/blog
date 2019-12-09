import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loading from "../components/loading/loading";
import styled from "styled-components";
import Moment from "react-moment";
import Button from "./buttom/buttom.component";

const GET_POSTS = gql`
  query getPosts($first: Int, $skip: Int, $orderBy: PostOrderByInput) {
    posts(first: $first, skip: $skip, orderBy: $orderBy) {
      id
      title
      body
      createdAt
      postPicture @client
      author {
        id
        name
        profilePicture @client
      }
    }
  }
`;

export default function PostsCards() {
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS);
  if (loading) return <Loading />;
  if (error) return <Loading />;

  return (
    <PostsContainer>
      {data.posts.map(post => (
        <PostContainer>
          <img src={post.postPicture} alt="" />
          <Title>{post.title}</Title>
          <Body>
            {post.body.length > 5 ? `${post.body.slice(0, 200)}...` : post.body}
          </Body>
          <AuthorContainer>
            <img src={post.author.profilePicture} alt="" />
            <VerticalLine></VerticalLine>
            <NameAndDate>
              <h2>{post.author.name}</h2>
              <Moment fromNow>{post.createdAt}</Moment>
            </NameAndDate>
          </AuthorContainer>
          <StyledButtom>{"Read More"}</StyledButtom>
        </PostContainer>
      ))}
    </PostsContainer>
  );
}

const PostsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: var(--background2);
  flex-wrap: wrap;
  padding: 0 50px;
  margin: 0px;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
`;

const PostContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  padding: 10px;
  background: var(--background1);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  flex: 0 1 calc(33.33% - 60px);
  @media (max-width: 700px) {
    flex: 0 1 calc(100% - 60px);
  }

  &:hover {
    opacity: 0.95;
    transform: scale(1.01);
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h2`
  color: var(--stroke);
  margin: 0px;
`;

const AuthorContainer = styled.div`
  display: flex;
  height: 60px;
  position: relative;
  margin: 5px 0;
  img {
    width: auto;
    height: 40px;
    border: 2.5px solid var(--stroke);
    border-radius: 50px;
    margin: auto 0;
  }
`;

const NameAndDate = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  color: var(--paragraphy);
  margin: 0px auto 0px 0px;
  h2 {
    margin: 0px;
    color: var(--stroke);
  }
`;

const VerticalLine = styled.div`
  border-left: 1.2px solid var(--paragraphy);
  height: 100%;
  margin: 0 10px;
  top: 0;
`;

const Body = styled.div`
  color: var(--paragraphy);
`;

const StyledButtom = styled(Button)`
  position: absolute;
  top: 50%; /*position Y halfway in*/
  left: calc(50% - 60px); /*position X halfway in*/
  display: none;
  outline: 0px;
  ${PostContainer}:hover & {
    display: block;
  }
  @media (max-width: 1366px) {
    display: block;
    position: unset;
    opacity: 0.8;
    background: white;
    border: solid 2px #3da9fc;
    color: #3da9fc;
  }
`;
