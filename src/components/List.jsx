import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getPosts } from "../redux/modules/form";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((state) => state.form);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);
  console.log(data)

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StList>
      <ListTop>
        <Category>
          <b>전체보기</b>
          <span> 집밥</span>
          <span> 브런치</span>
          <span> 야식</span>
          <span> 간식</span>
          <span> 분식</span>
          <span> 다이어트</span>
          <span> 기타</span>
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
        {/* {data.map((form) => {
          return (
            <Card
              key={form.id}
              onClick={() => {
                navigate("/Detail");
                // navigate(`/detail/${form.id}`) 나중에 이렇게 변경
              }}
            >
              <p> {form.category} </p>
                <h2> {form.title} </h2>
                <b> {form.username} </b>
            </Card>
          );
        })} */}
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
  top: 100px;
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
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 100px;
  margin-left: 100px;
`;

const Card = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 350px;
  height: 400px;
  text-align: center;
  cursor: pointer;
  /* background-color: ; */
`;

const Image = styled.img`
  height: 200px;
`;