import React from 'react'
import {Route , Switch , Redirect} from 'react-router-dom'

import Header from './Components/Header'
import Slider from './Components/Slider'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Body from './Components/Body'

import './App.scss'

const App = ()=>{
  return(
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Slider}/>
        <Route path="/menu" component={Contact} />
        <Route path="/timing" component={Contact} />
        <Route path="/about" component={Contact} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Body/>
      <Footer/>
    </>
  )
}

export default App;
