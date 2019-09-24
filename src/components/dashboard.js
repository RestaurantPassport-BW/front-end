import React from 'react'
import RestList from './restaurants/RestList'
import TabNav from './nav/TabNav'
import Header from './header/Header'

function Dashboard() {
  return (
    <div>
      <TabNav />
      <Header />
      <RestList />
    </div>
  )
}

export default Dashboard
