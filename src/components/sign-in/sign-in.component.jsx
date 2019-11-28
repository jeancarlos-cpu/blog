import React, { useState } from "react";
import Input from "../input/input.component";
import "./sign-in.styles.scss";
import { gql } from "apollo-boost";
import { useMutation, useApolloClient } from "@apollo/react-hooks";

export default () => {
  const [state, setState] = useState(initialState);
  const client = useApolloClient();
  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: ({ login }) => {
      localStorage.setItem("token", login.token);
      client.writeData({ data: { isLoggedIn: true } });
    }
  });

  const handleSignIn = event => {
    const { email, password } = state;
    event.preventDefault();
    loginUser({ variables: { email, password } });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account.</h2>
      <form onSubmit={handleSignIn}>
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          handleChange={handleChange}
          required={true}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          handleChange={handleChange}
          required={true}
        />
        <button>Sign In</button>
      </form>
    </div>
  );
};

const initialState = {
  email: "",
  password: ""
};

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      user {
        id
      }
      token
    }
  }
`;
