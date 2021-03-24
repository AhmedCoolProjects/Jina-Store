import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import "../styles/carouselC.scss";

function Project(props) {
  return (
    <Paper
      className="Project"
      style={{
        backgroundColor: props.item.color,
      }}
      elevation={10}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
}

const items = [
  {
    name: "First Slide",
    description: "You can choose any image you want to display here.",
    color: "#64ACC8",
  },
  {
    name: "Second Slide",
    description:
      "Also you can add custimized buttons to interact with the user and improve the user experience in your web site.",
    color: "#7D85B1",
  },
  {
    name: "Third Slide ",
    description:
      "You can make your carousel on the autoplay mode or not, also you can choose if you want to activate swiping on the slides to move.",
    color: "#CE7E78",
  },
  {
    name: "Fourth Slide",
    description: "Finaly, you can add as you want of slides .",
    color: "#C9A27E",
  },
];

export default function CarouselC(props) {
  return (
    <Carousel
      className="SecondExample"
      autoPlay
      animation="slide"
      timeout={600}>
      {items.map((item, index) => {
        return <Project item={item} key={index} />;
      })}
    </Carousel>
  );
}
