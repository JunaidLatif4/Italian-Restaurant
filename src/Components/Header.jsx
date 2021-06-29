import React from 'react'
import {NavLink} from 'react-router-dom'

import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import './CSS/Header.scss'

const Style = makeStyles({
    btn: {
        backgroundColor: "red",
        margin:"0 1rem"
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
                    >
                        HELLOW
                    </Button>
                    <Button
                        variant='contained'
                        className={classes.btn}
                    >
                        BOOK
                    </Button>
                </div>
                <div className="title">
                24 Hours Italian Restaurant 
                </div>
            </div>

            <nav className="nav">
                <NavLink to="/" className="navlink"> Home </NavLink> <div className="space">|</div>
                <NavLink to="/" className="navlink"> Home </NavLink> <div className="space">|</div>
                <NavLink to="/" className="navlink"> Home </NavLink> <div className="space">|</div>
                <NavLink to="/" className="navlink"> Home </NavLink> <div className="space">|</div>
                <NavLink to="/" className="navlink"> Home </NavLink>
            </nav>

        </div>
    )
}

export default Header
