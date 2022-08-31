import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { __getPosts } from "../redux/modules/form";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [like, setLike] = useState([0]);

  //json-server
  const { isLoading, error, posts } = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  // category

  const category = [
    "전체보기",
    "집밥",
    "브런치",
    "야식",
    "간식",
    "분식",
    "다이어트",
    "기타",
  ];

  return (
    <StList>
      <ListTop>
        {/* <Category>
        {category.map((a) => {
          return (
            <span>{a}</span>
          )
        })}
        </Category> */}

        <Category>
            <span><b>전체보기</b></span>
            <span>집밥</span>
            <span>브런치</span>
            <span>야식</span>
            <span>간식</span>
            <span>분식</span>
            <span>다이어트</span>
            <span>기타</span>
        </Category>

        <button
          onClick={() => {
            navigate("/form");
          }}
        >
          추가하기
        </button>
      </ListTop>

      <Content>
        {posts.map((form) => {
          like.push(0);
          return (
            <Card
              key={form.id}
              onClick={() => {
                navigate(`/detail/${form.id}`);
              }}
            >
              <b> {form.username} </b>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...like];
                  copy[form.id] = copy[form.id] + 1;
                  setLike(copy);
                }}
              >
                💛
              </span>{" "}
              {like[form.id]}
              <p> <b>{form.category}</b> </p>
              <h3> {form.title} </h3>
            </Card>
          );
        })}
      </Content>
    </StList>
  );
};

export default List;

const StList = styled.div`
  margin: auto 50px;
  padding-top: 250px;
  padding-bottom: 50px;
`;

const ListTop = styled.div`
  position: fixed;
  top: 120px;
  height: 100px;
  width: 100%;
  line-height: 100px;

  & button {
    position: absolute;
    top: 40px;
    right: 50px;
    margin-right: 100px;
    float: right;
    cursor: pointer;
  }

  background-color: white;
`;

const Category = styled.div`
  text-align: center;
  & span {
    margin: 0 15px;
    padding: 10px;
    border-radius: 20px;
    cursor: pointer;
    background-color: #5f9947;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 50px;
  margin-left: 100px;
  width: 120%;
`;

const Card = styled.div`
  padding-top: 30px;
  border: 1px solid black;
  border-radius: 15px;
  width: 350px;
  height: 150px;
  text-align: center;
  cursor: pointer;
  /* background-color: ; */
`;