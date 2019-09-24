import React from 'react'
import RestList from './restaurants/RestList'
import TabNav from './nav/TabNav'
import Header from './header/Header'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  flex-direction: column;
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
        <RestList />
      </Section>
    </Div>    
  )
}

export default Dashboard
