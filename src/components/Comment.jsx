import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/";
import { createComment } from "../redux/modules/comment";
import { useParams, useNavigate } from "react-router-dom";
import { __getComments } from "../redux/modules/comment";
import axios from "axios";
import CustomButton from "./CustomButton";
import nextId from "react-id-generator";
import CommentModal from "./CommentModal";
const Comment = () => {
  const number = nextId();

  const { id } = useParams();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { isLoading, error, comments } = useSelector((state) => state.comment);

  const [modal, setModal] = useState(false);

  const onDeleteHandler = (id) => {
    axios.delete(`http://localhost:3001/comments/${id}`);
  };

  const filteredComment = comments.filter((comment) => comment.parentId == id);

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
    axios.post("http://localhost:3001/comments", { ...comment, id: number });
    setComment(initialState);
  };

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
          required
        />
        <CustomButton title="입력하기" />
      </form>

      <Content>
        {filteredComment.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.desc}</p>
              <CustomButton
                title={"수정"}
                onClick={() => {
                  setModal(!modal);
                }}
              />
              <CustomButton
                title={"삭제"}
                onClick={() => {
                  onDeleteHandler(comment.id);
                }}
              />

              {modal === true ? (
                <CommentModal
                  comments={comments}
                  comment={comment}
                  modal={modal}
                  setModal={setModal}
                />
              ) : null}
            </div>
          );
        })}
      </Content>
    </StComment>
  );
};

export default Comment;

const StComment = styled.div`
  width: 40%;
`;

const Content = styled.div``;