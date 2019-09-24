import React from 'react'
import UserCard from './UserCard'
import Filter from './Filter'
import styled from 'styled-components'

const Div = styled.div`
  margin: 0 25px;
`

const H2 = styled.h2`
  margin: 25px auto;
`

function Header() {
  return (
    <Div>
      <H2><span role='img' aria-label='breifcase'>&#128188;</span> Restaurant Passport</H2>
      <UserCard />
      <Filter />
    </Div>
  )
}

export default Header
