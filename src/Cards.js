import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Cards.css";
import { Avatar } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

function Cards() {
  return (
    <div className="box">
    <div className="success">
        <h1>Success Stories</h1>
        <Typography>We have changed lives.Read,relate and remain reassured!</Typography>
    </div>
      <Carousel autoPlay>
        <div>
          <Card className="card_section">
              <h1 style={{margin:'0px',marginBottom:'10px', backgroundColor:'yellow',paddingBottom:"10px"}}>No offer to multiple offers</h1>
            <div className="img_sec">
              <Avatar
                src="./img3.png"
                sx={{ width: 156, height: 156 }}
                style={{ display: "block", margin: "auto",marginBottom:"30px",marginTop:"50px"}}
              />
              <Typography>Alok Maurya</Typography>
              <Typography>
                I focussed on just skill as advised by the mentors and cracked
                multiple double digit offers!
              </Typography>
            </div>
          </Card>
        </div>

        <div>
          <Card className="card_section">
              <h1 style={{margin:'0px',marginBottom:'10px', backgroundColor:'skyblue',paddingBottom:"10px"}}>Single mom cracks frontend developer job</h1>
            <div className="img_sec">
              <Avatar
                src="./img4.png"
                sx={{ width: 156, height: 156 }}
                style={{ display: "block", margin: "auto",marginBottom:'30px',marginTop:"50px" }}
              />
              <Typography>Navira Lobo</Typography>
              <Typography>
                There is something about sharpner which just kept me motivated.
                Not sure if it is the mentor or the curriculum,but my life has
                changes thanks to these people.
              </Typography>
            </div>
          </Card>
        </div>

        <div>
        <Card className="card_section">
              <h1 style={{margin:'0px',marginBottom:'10px', backgroundColor:'yellow',paddingBottom:"10px"}}>No offer to multiple offers</h1>
            <div className="img_sec">
              <Avatar
                src="./img3.png"
                sx={{ width: 156, height: 156 }}
                style={{ display: "block", margin: "auto",marginBottom:'30px',marginTop:"50px" }}
              />
              <Typography>Alok Maurya</Typography>
              <Typography>
                I focussed on just skill as advised by the mentors and cracked
                multiple double digit offers!
              </Typography>
            </div>
          </Card>
        </div>
      </Carousel>
      <button className="btn2">View All</button>
    </div>
  );
}

export default Cards;
