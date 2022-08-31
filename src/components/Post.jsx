import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "./CustomButton";
import { __getPosts } from "../redux/modules/form";
import MyModal from "../components/MyModal";

const Post = () => {
  const param = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, posts } = useSelector((state) => state.form);

  //모달열기
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  //모달의 수정하기
  const handleModalSubmit = () => {
    setIsOpen(false);
  };
  //모달의 취소하기
  const handleModalCancel = () => setIsOpen(false);

  //게시글 삭제..??
  const onDeletePost = (id) => {
    return posts.filter((post) => post.id !== id), navigate("/");
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
              </div>
            );
          }
        })}

        <CustomButton title={"수정"} onClick={handleClick} />
        {/* <MyModal
          isOpen={isOpen}
          onSubmit={handleModalSubmit}
          onCancel={handleModalCancel}
        /> */}
        <CustomButton title={"삭제"} onClick={() => onDeletePost(posts.id)} />
      </div>
    </StPost>
  );
};

export default Post;

const StPost = styled.div`
  width: 60%;

`;