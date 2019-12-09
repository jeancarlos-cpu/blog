import { gql } from "apollo-boost";

export const GET_USER_BY_ID = gql`
  query getUser($query: String!) {
    users(query: $query) {
      id
      name
      profilePicture @client
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

export const GET_USERS = gql`
  query getUsers($orderBy: UserOrderByInput, $first: Int) {
    users(orderBy: $orderBy, first: $first) {
      id
      name
      createdAt
      profilePicture @client
    }
  }
`;

export const IS_USER_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

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

export const GET_COMMENTS = gql`
  query getComments($first: Int, $skip: Int, $orderBy: CommentOrderByInput) {
    comments(first: $first, skip: $skip, orderBy: $orderBy) {
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
