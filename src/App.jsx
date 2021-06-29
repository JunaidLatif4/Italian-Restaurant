import React from 'react'
import {Route , Switch , Redirect} from 'react-router-dom'

import Header from './Components/Header'
import Slider from './Components/Slider'

import './App.scss'

const App = ()=>{
  return(
    <>
      <Header/>
      <Switch>
        <Route path="/" component={Slider}/>
      </Switch>
    </>
  )
}

export default App;
