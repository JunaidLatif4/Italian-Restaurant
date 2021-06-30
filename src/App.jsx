import React from 'react'
import {Route , Switch , Redirect} from 'react-router-dom'

import Header from './Components/Header'
import Slider from './Components/Slider'
import Map from './Components/Map'

import './App.scss'

const App = ()=>{
  return(
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Slider}/>
        <Route exact path="/about" component={Map} />
      </Switch>
    </>
  )
}

export default App;
