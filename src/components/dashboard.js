import React from 'react'
import RestList from './restaurants/RestList'
import TabNav from './nav/TabNav'
import Header from './header/Header'
import styled from 'styled-components'
import { Route } from 'react-router'
import Home from './Home'
import Instructions from './instructions'




const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 54px;
  width: 600px;
  height: autopx;
  border-radius: 5px;
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.08);
  background-color: #f7f7f7;
`

const Div = styled.div`
  display: flex;
  width: 1440px;
  height: auto;
  background-color: #f0f0f0;
`



function Dashboard() {
  return (
     <Div>
      <Header />
        <Section>
          <TabNav />
          <img className="cityImage" src="../img/downtown-austin.jpg" alt="downtown austin"/>
          <Route exact strict path={'/dashboard'} render={() => <Home />}/>
          <Route path={'/dashboard/austin'} render={() => <RestList />}/>
        </Section>
      </Div>    
  )
}

export default Dashboard
