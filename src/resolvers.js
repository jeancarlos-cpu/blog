import { gql } from "apollo-boost";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }

  extend type User {
    profilePicture: Boolean!
  }
`;

export const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export const resolvers = {
  Query: {
    isLoggedIn: (parent, args, { cache }) => {
      const { isLoggedIn } = cache.readQuery({ query: IS_LOGGED_IN });
      return isLoggedIn;
    }
  },
  User: {
    profilePicture: (parent, args, { cache }) => {
      const { id } = parent;
      return `https://robohash.org/${id}?set=set2`;
    }
  }
};
