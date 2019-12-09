import { gql } from "apollo-boost";
import { IS_USER_LOGGED_IN } from "./queries";

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }

  extend type User {
    profilePicture: String!
  }

  extend type Post {
    postPicture: String!
  }
`;

export const resolvers = {
  Query: {
    isLoggedIn: (parent, args, { cache }) => {
      const { isLoggedIn } = cache.readQeury({ query: IS_USER_LOGGED_IN });
      return isLoggedIn;
    }
  },
  User: {
    profilePicture: (parent, args, { cache }) => {
      const { id } = parent;
      return `https://robohash.org/${id}?set=set2`;
    }
  },
  Post: {
    postPicture: (parrent, args, { cache }) => {
      return `https://picsum.photos/id/${Math.floor(
        Math.random() * 300
      )}/350/200`;
    }
  }
};
