import React from "react";
import RestList from "./restaurants/RestList";
import TabNav from "./nav/TabNav";
import Header from "./header/Header";
import styled from "styled-components";
import { Route } from "react-router";
import Home from "./Home";
import CityNav from "./nav/CityNav";
import NYI from "./restaurants/NYI";
import RestListVisit from './restaurants/RestListVisit'

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 54px;
  width: 600px;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.08);
  background-color: #f7f7f7;
`;

const Div = styled.div`
  display: flex;
  width: 1440px;
  height: auto;
  background-color: #f0f0f0;
  margin: 0 auto;

`;

function Dashboard() {
  return (
    <Div>
      <Header />
      <Section>
        <Route path={"/dashboard"} component={TabNav} />
        <Route exact strict path={"/dashboard"} component={Home} />
        <Route path={"/dashboard/passport"} component={CityNav} />
        <Route path={'/dashboard/passport/austin'} component={RestList}/>
        <Route path={'/dashboard/visit'} component={RestListVisit}/>
        <Route path={"/dashboard/passport/NYI"} component={NYI} />
      </Section>
    </Div>
  );
}

export default Dashboard;
