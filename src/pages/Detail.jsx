import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
import Comment from "../components/Comment";
import Header from "../components/Header";

const Detail = () => {
  return (
    <StDetail>
        <Header/>
        <Post />
        <Comment />
    </StDetail>
  );
};

export default Detail;

const StDetail = styled.div`
  display: flex;
  padding-top: 120px;
`;