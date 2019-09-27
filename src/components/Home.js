import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 125px;
`;

function Home() {
  return (
    <Div>
      <h2>Welcome to Resturant Passport!</h2>
      <p>Click Passports and then Austin to see your first one!</p>
      <p>Click on My Passport to see the ones you have saved!</p>
    </Div>
  );
}

export default Home;
