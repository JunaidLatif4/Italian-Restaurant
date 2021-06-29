import React from 'react'
import './CSS/Body.scss'
import img1 from '../img/img-1.jpg'
import img2 from '../img/img-2.jpg'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const Body = () => {
    return (
        <>

        <div className="main_body">
            <div className="body_grid">
                <div className="body_grid_1">
                    <div className="grid_1_heading">
                        <h1 className="grid_1">
                            We're open for dine-in
                        </h1>
                        <hr className="hr_1" />
                        <p className="grid_1_para">We can finally be together again! Book your table and give yourself something to look forward to.</p>
                        <img className="grid_1_img" src={img1} alt="Error" />
                        <Button variant="contained" color="primary">
                        Book now
                        </Button>
                    </div>
                </div>
                <div className="body_grid_2">
                    <div className="grid_2_heading">
                        <h1 className="grid_2">
                            Health Hub
                        </h1>
                        <hr className="hr_1" />
                        <p className="grid_1_para">We can finally be together again! Book your table and give yourself something to look forward to.</p>
                        <img className="grid_1_img" src={img2} alt="Error" />
                        <Button variant="contained" color="primary">
                        View more
                        </Button>
                    </div>
                </div>
            </div>

        </div>
            
        </>
    )
}

export default Body
