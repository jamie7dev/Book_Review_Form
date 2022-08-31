import React from "react";
import styled from "styled-components";

const CustomButton = ({ title, onClick }) => {
  return (
    <StButton onClick={onClick} title={title}>
      {title}
    </StButton>
  );
};

const StButton = styled.button`
  width: 70px;
  height: 30px;
  background-color: white;
`;

export default CustomButton;