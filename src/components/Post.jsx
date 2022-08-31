import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import { __getPosts } from "../redux/modules/form";
import axios from "axios";
import Modal from "./Modal";

const Post = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, error, posts } = useSelector((state) => state.form);

  const [modal, setModal] = useState(false);

  const onDeleteHandler = (id) => {
    axios.delete(`http://localhost:3001/posts/${id}`);
  };

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <StPost>
      <div>
        <CustomButton title={"이전으로"} onClick={() => navigate("/")}>
          이전으로
        </CustomButton>

        {posts.map((form) => {
          if (form.id == param.id) {
            return (
              <div key={form.id}>
                <p>{form.category}</p>
                <h4>{form.title}</h4>
                <p>{form.ingredients}</p>
                <p>{form.body}</p>

                <CustomButton
                  title={"수정"}
                  onClick={() => {
                    setModal(!modal);
                  }}
                />

                <CustomButton
                  title={"삭제"}
                  onClick={() => {
                    onDeleteHandler(form.id);
                    navigate("/");
                  }}
                />

                {modal === true ? (
                  <Modal posts={posts} form={form} modal={modal} setModal={setModal}/>
                ) : null}
              </div>
            );
          }
        })}
      </div>
    </StPost>
  );
};

export default Post;

const StPost = styled.div`
  width: 60%;
`;