import React from "react";
// import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addPost } from "../redux/modules/form";

let number = 1;

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    id: 0,
    username: "",
    category: "",
    title: "",
    writer: "",
    body: "",
  };

  const [post, setPost] = useState(initialState);


  // event handler
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value, id: number });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (post.username.trim() === "" || post.title.trim() === "" || post.writer.trim() === "" || post.body.trim() === "") return alert("한 글자 이상 입력해주세요!");
    dispatch(addPost({ ...post, id: number }));
    setPost(initialState);
    number++;
    navigate('/')
  };


  // image
  const [imageSrc, setImageSrc] = useState("");

  const imageUpload = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  // category
  const options = [
    { value: "", name: "카테고리 선택" },
    { value: "소설•시•에세이", name: "소설•시•에세이" },
    { value: "자기계발", name: "자기계발" },
    { value: "인문학•역사", name: "인문학•역사" },
    { value: "경제•경영", name: "경제•경영" },
    { value: "철학•예술•종교", name: "철학•예술•종교" },
    { value: "기타", name: "기타" },
  ];

  

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <div>
          <label>작성자</label> 
          <input
            type="text"
            name="username"
            value={post.username}
            onChange={onChangeHandler}
            minLength="1"
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
          <label>작가명</label>
          <input
            type="text"
            name="writer"
            value={post.writer}
            onChange={onChangeHandler}
            minLength="1"
          />
        </div>
        <div>
          <label>책 제목</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={onChangeHandler}
            minLength="1"
          />
        </div>
        <div>
          <label>내용</label>
          <input
            type="text"
            name="body"
            value={post.body}
            onChange={onChangeHandler}
            minLength="1"
          />
        </div>
        <div></div>
        <p>이미지를 업로드해주세요</p>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            imageUpload(e.target.files[0]);
          }}
        />
        <div className="preview">
          {imageSrc && (
            <img
              src={imageSrc}
              alt="preview-img"
              width="200px"
              height="250px"
            />
          )}
          
        </div>
        <div>
          <br></br>
          <div>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              취소
            </button>
            <button>추가하기</button>
            <button onClick={() => setPost(initialState)}>다시 작성하기</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
