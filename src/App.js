import React from "react";
import Router from "./shared/Router";
import styled from "styled-components";

function App() {
  return (
    <StLayout>
      <Router />
      </StLayout>
  );
}

export default App; 

const StLayout = styled.div`
  margin: auto 0;
  max-width: 1200px;
  min-width: 800px;
  min-height: 100vh;
`;