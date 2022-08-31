import React, { useEffect } from "react";
import ReactModal from "react-modal";
import Form from "../components/Form";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { __getPosts } from "../redux/modules/form";

const MyModal = ({ isOpen, onSubmit, onCancel }) => {
  const dispatch = useDispatch();

  const handleClickSubmit = () => {
    onSubmit();
  };

  const handleClickCancel = () => {
    onCancel();
  };

  const { isLoading, error, posts } = useSelector((state) => state.form);
  const { id } = useParams();
  const post = posts.find((posts) => {
    return String(posts.id) === id;
  });

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
    <ReactModal isOpen={isOpen}>
      <div>모달 입니다.</div>
      {/* <Form /> */}

      <p>{post.title}</p>
      <div>
        <button onClick={handleClickSubmit}>확인</button>
        <button onClick={handleClickCancel}>취소</button>
      </div>
    </ReactModal>
  );
};
export default MyModal;