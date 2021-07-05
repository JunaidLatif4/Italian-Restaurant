import React from "react";
import "./CSS/About.scss";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import img5 from "../img/back.jpg";
import img3 from "../img/about1.jpg";
import img4 from "../img/about3.jpg";

const Style = makeStyles({
  btn: {
    display: "flex",
    margin: "auto",
    borderRadius: 0,
    width: "45%",
    background: "#00756c",
    height: "3rem",
    color: "#fff",
    position: "relative",
    marginTop: "20px",
  },
});

const About = () => {
  const classes = Style();
  return (
    <div>
      <div className="about_container">
        <div className="head">
          <img src={img5} alt="Error" className="about_img1" />
        </div>
        <div className="section_1">
          <h1 className="section1_heading">We Are Family</h1>
          <p className="section1_para">
            Founded by two brothers in 1993, ASK Italian is a family of
            restaurants across the UK. We may not be a traditional trattoria but
            we’re connected by a love of Italy, great food and sociable
            mealtimes, just like a big unconventional family. We invite
            customers to enter our restaurants and leave behind the daily grind,
            welcomed by our teams and inspired by our interiors. Our teams are
            passionate about giving our customers the best experience so you can
            concentrate on enjoying the food, the company and your time
            together.
          </p>
        </div>
        <div className="section_2">
          <h1 className="section2_heading">What you can Expect</h1>
        </div>
        <div className="flexbox">
          <div className="box1">
            <h1 className="box1_heading">ITALIAN IN SPIRIT</h1>
            <p className="box1-para1">
              Our Italian menu is inspired by trips to Italy and created in
              collaboration with expert friend, Theo Randall.
            </p>
            <p className="box1-para2">
              You’ll find lots of choice including classic Italian food
              alongside our own signature take on a favourite dish or
              ingredient.
            </p>
            <p className="box1-para3">
              As well as our made-for-sharing antipasto boards, stone baked
              pizzas, fresh pasta and desserts, we’ve got vegetarian, vegan and
              non gluten options so there’s something for everyone. Little ones
              can join in too with our fun and tasty kids menu!
            </p>
            <Button className={classes.btn} variant="contained" color="primary">
              View Menu
            </Button>
          </div>
          <div className="box2">
            <img src={img3} alt="Error" className="about_img2" />
          </div>
          <div className="box3">
            <img src={img4} alt="Error" className="about_img3" />
          </div>
        </div>
        <div className="flexbox2">
        <div className="box4">
            <img src={img3} alt="Error" className="about_img5" />
          </div>
          <div className="box5">
            <h1 className="box1_heading">ITALIAN IN SPIRIT</h1>
            <p className="box1-para1">
              Our Italian menu is inspired by trips to Italy and created in
              collaboration with expert friend, Theo Randall.
            </p>
            <p className="box1-para2">
              You’ll find lots of choice including classic Italian food
              alongside our own signature take on a favourite dish or
              ingredient.
            </p>
            <p className="box1-para3">
              As well as our made-for-sharing antipasto boards, stone baked
              pizzas, fresh pasta and desserts, we’ve got vegetarian, vegan and
              non gluten options so there’s something for everyone. Little ones
              can join in too with our fun and tasty kids menu!
            </p>
            <Button className={classes.btn} variant="contained" color="primary">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
