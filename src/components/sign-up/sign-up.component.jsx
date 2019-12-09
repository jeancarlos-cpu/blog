import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import styled from "styled-components";
import Logo from "../../assets/random-line.svg";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  error: ""
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

export default ({ toogleStatus }) => {
  const [state, setState] = useState(initialState);
  const client = useApolloClient();
  const [createUser] = useMutation(CREATE_USER, {
    onCompleted: ({ createUser }) => {
      localStorage.setItem("token", createUser.token);
      client.writeData({ data: { isLoggedIn: true } });
    },
    onError: e => {
      setState({ ...state, error: e.message });
    }
  });

  const handleSignIn = event => {
    event.preventDefault();
    setState({ ...state, error: "" });
    const { email, password, confirmPassword, name } = state;
    if (password !== confirmPassword) {
      setState({ ...state, error: "passwords do not match" });
    } else {
      createUser({ variables: { name, email, password } });
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    console.log(value);
    setState({
      ...state,
      [name]: value
    });
  };

  return (
    <Form onSubmit={handleSignIn} action="post">
      <img src={Logo} alt="Airbnb logo" />
      {state.error && <p>{state.error}</p>}
      <input
        type="email"
        name="email"
        value={state.email}
        placeholder="E-mail"
        onChange={handleChange}
        required={true}
      />
      <input
        type="text"
        name="name"
        value={state.name}
        placeholder="Username"
        onChange={handleChange}
        required={true}
      />
      <input
        type="password"
        name="password"
        value={state.password}
        placeholder="Password"
        onChange={handleChange}
        required={true}
      />
      <input
        type="password"
        name="confirmPassword"
        value={state.confirmPassword}
        placeholder="Comfirm password"
        onChange={handleChange}
        required={true}
      />
      <button>Sign up for free</button>
      <hr />
      <span onClick={toogleStatus}>Sign in</span>
    </Form>
  );
};

export const Form = styled.form`
  width: 400px;
  background: var(--background1);
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 70px;
    margin: 10px 0 40px;
  }
  p {
    color: var(--stroke);
    margin-bottom: 15px;
    border: 1px solid var(--stroke);
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    line-height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    &::placeholder {
      color: #999;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: var(--highlight);
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  span {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }
`;
