import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {

  const navigate = useNavigate();

  return (
  <StHeader>
  <h1 onClick = {() => {navigate("/")}}>BOOK REVIEW</h1>
  </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  padding: 0 50px;

  background-color: #5f9947;

`;