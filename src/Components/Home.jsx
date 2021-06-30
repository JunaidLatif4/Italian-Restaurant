import React from 'react'

import Slider from './Slider'
import Section2 from './Body'

import './CSS/Home.scss'

const Home = () => {
    return (
        <>
        <div className="home_container">
            <Slider/>
            <div className="section1">
                <h3>Opening hours</h3>
                <hr />
                <p>12:30 PM to 12:00 AM (7 days a week)</p>
            </div>
            <Section2/>
        </div>
        </>
    )
}

export default Home
