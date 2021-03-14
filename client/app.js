import React from 'react'
import {MenuAppBar, SimpleBottomNavigation} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <MenuAppBar />
      <Routes />
      {/* <SimpleBottomNavigation /> */}
    </div>
  )
}

export default App
