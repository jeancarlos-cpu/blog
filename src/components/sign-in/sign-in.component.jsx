import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useMutation, useApolloClient } from "@apollo/react-hooks";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/random-line.svg";

const initialState = {
  email: "",
  password: "",
  error: ""
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

export default ({ toogleStatus }) => {
  const [state, setState] = useState(initialState);
  const history = useHistory();
  const client = useApolloClient();

  const [loginUser] = useMutation(LOGIN_USER, {
    onCompleted: ({ login }) => {
      localStorage.setItem("token", login.token);
      client.writeData({ data: { isLoggedIn: true } });
      setState(initialState);
      history.goBack();
    },
    onError: e => setState({ ...state, error: e.message })
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
    <Form onSubmit={handleSignIn}>
      <img src={Logo} alt="Airbnb logo" />
      {state.error && <p>{state.error}</p>}
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        onChange={handleChange}
        required={true}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required={true}
      />
      <button type="submit">Login</button>
      <hr />
      <span onClick={toogleStatus}>Sign up for free</span>
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
