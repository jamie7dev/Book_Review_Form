import React from "react";
import styled from "styled-components";
import Form from "../components/Form";
import Header from "../components/Header";

const AddForm = () => {
  return (
    <StAddForm>
      <Header />
      <Form />
    </StAddForm>
  );
};

export default AddForm;

const StAddForm = styled.div`
  padding-top: 120px;
`;