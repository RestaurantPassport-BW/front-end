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
  width: 600px;
`
const Div = styled.div`
  display: flex;
`



function Dashboard() {
  return (
     <Div>
      <Header />
        <Section>
          <TabNav />
          <Route exact strict path={'/dashboard'} render={() => <Home />}/>
          <Route path={'/dashboard/'} component={Instructions} />
          <Route path={'/dashboard/austin'} render={() => <RestList />}/>
        </Section>
      </Div>    
  )
}

export default Dashboard
