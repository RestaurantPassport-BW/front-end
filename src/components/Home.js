import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 125px;
`;

function Home() {
  return (
    <Div>
      <h2>Welcome to Resturant Passport!</h2>
      <p>Click My Passports to see your first one!</p>
    </Div>
  );
}

export default Home;
