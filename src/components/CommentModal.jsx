import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Modal = (props) => {
  const [editComment, setEditComment] = useState({
    desc: "",
  });

  const onEditHandler = (id, edit) => {
    axios.patch(`http://localhost:3001/comments/${id}`, edit);
  };


  return (
    <StModal>
      <Card>
        <div>
          <label>댓글</label>
          <input
            type="text"
            name="desc"
            defaultValue={props.comment.desc}
            onChange={(e) => {
              setEditComment({
                ...editComment,
                desc: e.target.value,
              });
            }}
          />
        </div>
        <div>
        <button
          type="button"
          onClick={() => {
            onEditHandler(props.comment.id, editComment);
            props.setModal(!props.modal);
          }}
        >
          수정
        </button>
        <button
          type="button"
          onClick={() => {
            props.setModal(!props.modal);
          }}
        >
          취소
        </button>
        </div>
      </Card>
    </StModal>
  );
};
export default Modal;

const StModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Card = styled.div`
  padding: 30px;
  position: absolute;
  top: calc(50vh - 250px);
  left: calc(50vw - 320px);
  background-color: white;
  display: block;
  text-align: center;
  justify-content: center;
  border-radius: 10px;
  width: 600px;
  height: 400px;
  & input {
    width: 400px;
  }
  & textarea {
    width: 400px;
    height: 130px;
  }
  & div {
    margin-top: 15px;
  }
`;