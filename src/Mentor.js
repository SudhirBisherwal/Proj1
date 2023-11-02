import React from "react";
import "./Mentor.css";
import { Card, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Mentor() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:4 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      };
  return (
    <div className="carousel-container">
    <div className="head9">
        <h1>Mentor</h1>
        <Typography>Navigate the path to success with our experienced team</Typography>
    </div>
    <Slider {...settings} style={{marginBottom:"40px"}} >
      <div>
      <Card className="Mentor_card">
        <Avatar
          src="./img3.png"
          sx={{ width: 156, height: 156 }}
          style={{
            display: "block",
            margin: "auto",
            marginBottom: "30px",
            paddingTop: "50px",
          }}
        />
        <div className="card_part">
            <span className="typo">Sudhir</span>
            <span className="typo1">DSA</span>
        </div>
      </Card>
      </div>

      <div>
      <Card className="Mentor_card">
        <Avatar
          src="./img3.png"
          sx={{ width: 156, height: 156 }}
          style={{
            display: "block",
            margin: "auto",
            marginBottom: "30px",
            marginTop: "50px",
          }}
        />
        <div className="card_part">
            <span className="typo">Sudhir</span>
            <span className="typo1">DSA</span>
        </div>
      </Card>
      </div>

      <div>
      <Card className="Mentor_card">
        <Avatar
          src="./img3.png"
          sx={{ width: 156, height: 156 }}
          style={{
            display: "block",
            margin: "auto",
            marginBottom: "30px",
            marginTop: "50px",
          }}
        />
        <div className="card_part">
            <span className="typo">Sudhir</span>
            <span className="typo1">DSA</span>
        </div>
      </Card>
      </div>

      <div>
      <Card className="Mentor_card">
        <Avatar
          src="./img3.png"
          sx={{ width: 156, height: 156 }}
          style={{
            display: "block",
            margin: "auto",
            marginBottom: "30px",
            marginTop: "50px",
          }}
        />
        <div className="card_part">
            <span className="typo">Sudhir</span>
            <span className="typo1">DSA</span>
        </div>
      </Card>
      </div>

      <div>
      <Card className="Mentor_card">
        <Avatar
          src="./img3.png"
          sx={{ width: 156, height: 156 }}
          style={{
            display: "block",
            margin: "auto",
            marginBottom: "30px",
            marginTop: "50px",
          }}
        />
        <div className="card_part">
            <span className="typo">Sudhir</span>
            <span className="typo1">DSA</span>
        </div>
      </Card>
      </div>


      <div>
      <Card className="Mentor_card">
        <Avatar
          src="./img3.png"
          sx={{ width: 156, height: 156 }}
          style={{
            display: "block",
            margin: "auto",
            marginBottom: "30px",
            marginTop: "50px",
          }}
        />
        <div className="card_part">
            <span className="typo">Sudhir</span>
            <span className="typo1">DSA</span>
        </div>
      </Card>
      </div>


      <div>
      <Card className="Mentor_card">
        <Avatar
          src="./img3.png"
          sx={{ width: 156, height: 156 }}
          style={{
            display: "block",
            margin: "auto",
            marginBottom: "30px",
            marginTop: "50px",
          }}
        />
        <div className="card_part">
            <span className="typo">Sudhir</span>
            <span className="typo1">DSA</span>
        </div>
      </Card>
      </div>
      
    </Slider>
    </div>
  );
}

export default Mentor;
