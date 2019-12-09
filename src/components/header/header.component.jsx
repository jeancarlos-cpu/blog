import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useApolloClient } from "@apollo/react-hooks";
import styled from "styled-components";

export default React.memo(({ isLoggedIn }) => {
  const client = useApolloClient();
  const handleSignOut = () => {
    localStorage.clear();
    client.writeData({ data: { isLoggedIn: false } });
  };

  return (
    <StyledHeader>
      <StyledLink to="/">
        <Picture src={logo} alt="aa" />
      </StyledLink>
      <StyledList>
        <li>
          <StyledLink to="/about">ABOUT</StyledLink>
        </li>
        <li>
          {isLoggedIn ? (
            <div onClick={handleSignOut}>SIGN OUT</div>
          ) : (
            <StyledLink to="/login">LOGIN</StyledLink>
          )}
        </li>
      </StyledList>
    </StyledHeader>
  );
});

const StyledHeader = styled.div`
  position: relative;
  height: 80px;
  width: 100%;
  /* margin: 0px auto; */
  border: 0 40px;
  border-bottom: solid 0.02px var(--secondary);
  background: var(--background1);
`;

const Picture = styled.img`
  position: absolute;
  padding: 10px;
  height: 70%;
  width: auto;
  @media only screen and (max-width: 767px) {
    padding: 10px 0px;
  }
`;

const StyledList = styled.ul`
  height: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  li {
    margin-right: 40px;
    color: var(--highlight);
    &:hover {
      cursor: pointer;
      color: var(--secondary-hover);
    }
    @media only screen and (max-width: 767px) {
      margin-right: 10px;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
`;
