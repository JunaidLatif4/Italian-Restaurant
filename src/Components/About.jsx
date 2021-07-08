import React from "react";
import "./CSS/About.scss";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import img5 from "../img/back.jpg";
import img3 from "../img/about1.jpg";
import img4 from "../img/about3.jpg";
import img6 from "../img/about4.jpg";
import img7 from "../img/about5.jpg";

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
          <h1 className="about_heading">What bring us togather</h1>
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
            <img src={img6} alt="Error" className="about_img5" />
          </div>
          <div className="box5">
            <h1 className="box1_heading">OUR RESTAURANTS</h1>
            <p className="box1-para1">
            Escape the daily grind and step into our Italian-inspired interiors. We’ll start your meal with a lemonade taster as our way of saying ‘make yourself at home’.
            </p>
            <p className="box1-para2">
            We’ve brought the al fresco indoors and added a touch of sparkle with disco balls and gold. Many of our restaurants feature bespoke artwork created to reflect the spirit of the community and drawing on the beauty of an Italian counterpart.
            </p>
            <p className="box1-para3">
            Every one different but all with the same warm Italian welcome so you can relax and enjoy your time spent together around the table, just like the Italians do.
            </p>
            <Button className={classes.btn} variant="contained" color="primary">
            FIND YOUR ASK
            </Button>
          </div>
        </div>
        <div className="flexbox3">
        
          <div className="box7">
            <h1 className="box1_heading">CHARITY PARTNER</h1>
            <p className="box1-para1">
            At ASK Italian, we’re proud to support Great Ormond Street Hospital Children’s Charity (GOSH). This extraordinary hospital has always depended on charitable support to give seriously ill children the best chance to fulfil their potential.
            </p>
            <p className="box1-para2">
            Families are so important to us here at ASK Italian so the partnership feels instinctively right. Together, you, our valued customers along with our brilliant teams have raised more than £1.5 million for GOSH Charity. You have funded many essential facilities for children, young people and their families, like a ward kitchen and play room to help make their visit to GOSH more comfortable.
            </p>
            <p className="box1-para3">
            Our next target for GOSH is to reach another £1 million milestone to fund a parent and family accommodation facility at the hospital. The accommodation allows families to be together, providing a home from home – a small token of normality under difficult circumstances.
            </p>
            <Button className={classes.btn} variant="contained" color="primary">
            MORE ABOUT GOSH
            </Button>
          </div>
          <div className="box6">
            <img src={img7} alt="Error" className="about_img5" />
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
