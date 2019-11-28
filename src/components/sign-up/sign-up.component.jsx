import React, { useState } from "react";
import Input from "../input/input.component";
import { gql } from "apollo-boost";
import { useMutation, useApolloClient } from "@apollo/react-hooks";

export default () => {
  const [state, setState] = useState(initialState);
  const client = useApolloClient();
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: ({ createUser }) => {
      localStorage.setItem("token", createUser.token);
      client.writeData({ data: { isLoggedIn: true } });
    }
  });

  const handleSignIn = event => {
    event.preventDefault();
    const { email, password, confirmPassword, name } = state;
    if (password !== confirmPassword) return alert("passwords don't match");
    createUser({ variables: { name, email, password } });
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
      <h2>I don't have an account yet.</h2>
      <form onSubmit={handleSignIn} action="post">
        <Input
          type="text"
          name="name"
          placeholder="Username"
          handleChange={handleChange}
          required={true}
        />
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
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Comfirm password"
          handleChange={handleChange}
          required={true}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(data: { name: $name, email: $email, password: $password }) {
      user {
        id
      }
      token
    }
  }
`;
