import React from "react";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

import s1 from "../img/s1.jpg";
import s2 from "../img/s2.jpg";
import s3 from "../img/s3.jpg";
import s4 from "../img/s4.jpg";
import s5 from "../img/s5.jpg";
import s6 from "../img/s6.jpg";
import s7 from "../img/s7.jpg";
import s8 from "../img/s8.jpg";

import './CSS/Slider.scss'

const Item = ({item}) => {
  return (
    <Paper className="slider_box">
      <img src={item.img} alt="ERROR" id="img" />
      {/* <p>{props.item.description}</p> */}

    </Paper>
  );
};

const Slider = () => {
  var items = [
    {
      img: s1,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s2,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s3,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s4,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s5,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s6,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s7,
      description: "Probably the most random thing you have ever seen!",
    },
    {
      img: s8,
      description: "Probably the most random thing you have ever seen!",
    },
  ];

  return (
    <>
      <div className="slider_container">
        <Carousel>
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
