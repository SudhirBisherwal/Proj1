import "./index";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./Banner.css";

function Banner() {
  return (
    <div className="mainbox">
      <div className="mainbox1">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <h1>₹ 0 Fee till placement</h1>
            <img src="./img2.png" alt="" />
            <h4 className="heading4">
              Pay only 17% of your monthly pay for 1 Year.
            </h4>
            <h4>Most affordable program in the world.Know more</h4>
            <button className="btn1">Apply Now</button>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <h2>Making Learning Addictive</h2>
            <img src="./img1.png" alt="" width="100%" />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <h4 className="head">275+</h4>
            <p className="para">Partner companies</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <h4 className="head">97%</h4>
            <p>Partner companies</p>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <h4 className="head">18 LPA</h4>
            <p>Partner companies</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Banner;
