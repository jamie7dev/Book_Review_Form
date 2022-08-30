import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addPost } from "../redux/modules/form";
import axios from "axios";
import nextId from "react-id-generator";
import { __getPosts } from "../redux/modules/form";

const Post = () => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);
  console.log(data)


  return <StPost>
    
    <div>
      홈으로 이동 링크
    </div>


    <StContainer>

    이곳은 내용이 보여지는 구역

    <ConDirect>
    <ConLabel>책 제목</ConLabel>
    <div>미라클모닝</div>
    </ConDirect>

    <ConDirect>
    <ConLabel>작성자</ConLabel>
    <div> 가을은 독서의 계절</div>

    </ConDirect>

    <ConDirect>
    <ConLabel>내용</ConLabel>

    <div>저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요저는 아침에 못 일어나겠어요</div>

    </ConDirect>

    <ConDirect>
      
      <ConLabel>이미지</ConLabel>
      <div>사진들어갈 곳</div>
      
      </ConDirect>
    
    <ConBtn>
    <button>수정</button>
    <button>삭제</button>
    </ConBtn>
    
   
    </StContainer>


  </StPost>


};

export default Post;

const StPost = styled.div`
  width: 50%;
`;

const StContainer = styled.div`
  border: 1px solid #ddd;
  height: 900px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 20px;
  margin-bottom: 24px;
`;

const ConDirect = styled.div`
  flex-direction: column;
  display: flex;
  padding: 0 0 0 20px ;
`;

const ConLabel= styled.label`
  padding: 30px 0 30px 0;
  font-size: 20px;
  font-weight: bold;
`;

const ConBtn= styled.div`
  flex-direction: row;
  align-self: flex-end;
  margin-bottom: 20px;
 `;