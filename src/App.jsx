import React from 'react'
import {Route , Switch , Redirect} from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

import './App.scss'

const App = ()=>{
  return(
    <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/menu" component={Menu} />
        <Route path="/timing" component={Contact} />
        <Route path="/about" component={Contact} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer/>
    </>
  )
}

export default App;
