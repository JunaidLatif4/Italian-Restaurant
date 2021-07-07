import React from 'react'
import './CSS/Body.scss'


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import img1 from '../img/img-1.jpg'
import img2 from '../img/img-2.jpg'

const Style = makeStyles({
    btn: {
        display: "flex",
      margin: "auto",
      borderRadius: 0,
      width: "25%",
      background: "#00756c",
      height: "4rem",
      color: "#fff",
      position: "relative",
      marginTop:"20px"
    },
  });

const Body = () => {
    const classes = Style();
    return (
        <>
            <div className="main_body">
                <div className="box_1">
                    <div className="box_1_heading">
                        <h3 className="box_1_title">
                            We're open for dine-in
                        </h3>
                    </div>
                    <div className="box_1_hr"><hr /></div>
                    <p className="box_1_para">

                        We can finally be together again! Book your table and give yourself something to look forward to.


                    </p>
                    <img src={img1} alt="Error" className="box_1_img" />
                    <Button className={classes.btn} variant="contained" color="primary">
                        Book now
                    </Button>
                    <div className="bottom"></div>



                </div>
                <div className="border"></div>

                <div className="box_2">
                    <div className="box_2_heading">
                        <h3 className="box_2_title">
                            Health Hub
                        </h3>
                    </div>
                    <div className="box_2_hr"><hr /></div>
                    <p className="box_2_para">


                    We can finally be together again! Book your table and give yourself something to look forward to.


                    </p>
                    <img src={img2} alt="Error" className="box_2_img" />
                    <Button className={classes.btn} variant="contained" color="primary">
                        View more
                    </Button>
                <div className="bottom"></div>
                </div>

            </div>
        </>
    )
}

export default Body
