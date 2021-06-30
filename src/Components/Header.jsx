import React from 'react'
import {NavLink} from 'react-router-dom'

import { Button } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles'

import Title from '../img/title.svg'
import './CSS/Header.scss'

const Style = makeStyles({
    btn: {
        backgroundColor: "#00756c",
        fontWeight:"bold",
        color:"white",
        margin:"0 .5rem",
        fontSize:"large"
    }
})

const Header = () => {
    const classes = Style();
    return (
        <div className="header_container">
            <div className="header_intro">
                <div className="book">
                    <Button
                        variant='contained'
                        className={classes.btn}
                        startIcon={<LocationOnIcon/>}
                    >
                        Locate US
                    </Button>
                    <Button
                        variant='contained'
                        className={classes.btn}
                    >
                        BOOK NOW
                    </Button>
                </div>
                <div className="title">
                <img src={Title} alt="ERROR" /> 
                </div>
            </div>

            <nav className="nav">
                <NavLink to="/" className="navlink"> Home </NavLink> <div className="space">|</div>
                <NavLink to="/" className="navlink"> Menus </NavLink> <div className="space">|</div>
                <NavLink to="/" className="navlink"> Home </NavLink> <div className="space">|</div>
                <NavLink to="about" className="navlink"> About Us </NavLink> <div className="space">|</div>
                <NavLink to="/" className="navlink"> Contact Us </NavLink>
            </nav>

        </div>
    )
}

export default Header
