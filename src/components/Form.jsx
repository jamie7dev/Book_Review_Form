import React from "react";
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addPost } from "../redux/modules/form";
import axios from "axios";
import nextId from "react-id-generator";


// let number = 3;

const Form = () => {
  let id = nextId();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  
//초기값
  const initialState = {
    id: 0,
    username: "",
    category: "",
    title: "",
    ingredients: "",
    body: "",
  };


  const [post, setPost] = useState(initialState);


  // event handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value});
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (post.username.trim() === "" || post.category.trim() === ""  ||post.title.trim() === "" || post.ingredients.trim() === ""||   post.body.trim() === "") return alert("모든 칸을 채워주세요!");
    dispatch(addPost({ ...post, id: id }));
    console.log({...post, id: id})
    axios.post("http://localhost:3001/posts", { ...post, id: id });
    setPost(initialState);
    // number++;
    navigate('/')
  };


  
  // category
  const options = [
    { value: "", name: "카테고리 선택" },
    { value: "집밥", name: "집밥" },
    { value: "브런치", name: "브런치" },
    { value: "야식", name: "야식" },
    { value: "간식", name: "간식" },
    { value: "분식", name: "분식" },
    { value: "다이어트", name: "다이어트" },
    { value: "기타", name: "기타" },
  ];


  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <div>
            <label>작성자</label> 
            <input
              type="text"
              name="username"
              value={post.username}
              onChange={onChangeHandler}
              maxLength="10"
            />
          </div>
          <div>
            <label>카테고리</label>
            <select
              name="category"
              value={post.category}
              onChange={onChangeHandler}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>요리명</label>
            <input
              type="text"
              name="title"
              value={post.title}
              onChange={onChangeHandler}
              maxLength="50"
            />
          </div>
          <div>
            <label>재료</label>
            <input
              type="text"
              name="ingredients"
              value={post.ingredients}
              onChange={onChangeHandler}
              maxLength="50"
            />
          </div>
          <div>
            <label>내용</label>
            <textarea
              name="body"
              value={post.body}
              onChange={onChangeHandler}
              maxLength="500"
            />
          </div>
          <br></br>
          <div>
            <div>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                취소
              </button>
              <button>추가하기</button>
            
              <button onClick={(e) => {e.preventDefault();setPost(initialState)}}>다시 작성하기</button>
            </div>
          </div>
        </div>
      </form>
    </>
    
  );
};

export default Form;