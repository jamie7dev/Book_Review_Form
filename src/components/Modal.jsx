import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactModal from "react-modal";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __getPosts } from "../redux/modules/form";
import axios from "axios";

const Modal = (props) => {
  const [editPost, setEditPost] = useState({
    title: "",
    ingredients: "",
    body: "",
  });

  const onEditHandler = (id, edit) => {
    axios.patch(`http://localhost:3001/posts/${id}`, edit);
  };

  // const Edit = (e) => {
  //  if (e.target.value !== "") {
  //   return setEditPost({...editPost, [name]: e.target.value})
  // } else {return setEditPost({...editPost, [name]: '1'})}
  // }

  return (
    <StModal>
      <div>
        <label>요리명</label>
        <input
          type="text"
          name="title"
          defaultValue={props.form.title}
          onChange={(e) => {
            setEditPost({
              ...editPost,
              title: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label>재료</label>
        <input
          type="text"
          name="ingredients"
          defaultValue={props.form.ingredients}
          onChange={(e) => {
            setEditPost({
              ...editPost,
              ingredients: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <label>내용</label>
        <input
          type="text"
          name="body"
          defaultValue={props.form.body}
          onChange={(e) => {
            setEditPost({
              ...editPost,
              body: e.target.value,
            });
          }}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          onEditHandler(props.form.id, editPost);
        }}
      >
        수정
      </button>
      <button
      type="button"
      onClick={() => {
        props.setModal(!props.modal);
      }}>취소</button>
    </StModal>
  );
};
export default Modal;

const StModal = styled.div`
  margin: 50px auto;
  background-color: red;
`;