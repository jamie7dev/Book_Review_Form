import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { createComment } from "../redux/modules/comment";
import { useParams } from "react-router-dom";
import { __getComments } from "../redux/modules/comment";

let number = 2;

const Comment = () => {

  const {id} = useParams();

  const dispatch = useDispatch();

  //Comment.js가 mount 됐을 때 thunk함수를 dispatch하는 코드
  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);
  //

 

  // const filteredComment = comments.filter((comment) => comment.parentId == id)
  console.log(comments)

  const initialState = {
    parentId: id,
    id: 0,
    desc: "",
  };

  const [comment, setComment] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setComment({ ...comment, [name]: value, id: number });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(createComment({ ...comment, id: number }));
    setComment(initialState);
    number++;
  };

  const { isLoading, error, comments } = useSelector((state) => state.comment);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }


  return (
    <StComment>
      <form onSubmit={onSubmitHandler}>
        <label>댓글</label>
        <input
          type="text"
          name="desc"
          value={comment.desc}
          onChange={onChangeHandler}
        />
        <button>입력하기</button>
      </form>

      <div>
        {/* {filteredComment.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.desc}</p>
              <button>수정</button>
              <button>삭제</button>
            </div>
          );
        })} */}
      </div>
    </StComment>
  );
};

export default Comment;

const StComment = styled.div`
  width: 40%;
`;