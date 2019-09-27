import React from "react";
import UserCard from "./UserCard";
import Filter from "./Filter";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { Route } from "react-router";
const Div = styled.div`
  margin-top: 15px;
  margin-right: 30px;
`;

const H2 = styled.h2`
  margin-left: 255px;
  margin-top: 15px;
  margin-bottom: 16px;
  font-family: Lato;
  font-size: 19px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #333333;
  display: flex;
`;

function Header() {
  return (
    <Div>
      <H2>
        <Icon inverted color="violet" name="briefcase" />
        PASSPORT
      </H2>
      <UserCard />
      <Route path={"/dashboard/passport"} render={() => <Filter />} />
    </Div>
  );
}

export default Header;
