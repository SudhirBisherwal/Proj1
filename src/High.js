import React from 'react';
import "./High.css";
import { Grid, Typography } from '@mui/material';


function High() {
  return (
    <div className='mainboxx'>
    <div className='box1'>
    <h1>High Power Courses</h1>
    <Typography style={{color:'white'}}>Extremely hands-on and accelarated courses with a quality-first approach</Typography>
    </div>
    
    <div style={{marginLeft:"50px"}}>
    <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <div>
        <h2>Frontend Development</h2>
            <h3>Duration : 4 months</h3>
            <h3>Eligibility : Any final year student or degree holder</h3>
            <h3>Pay After Placement :</h3>
            <button className='btn1'>Explore</button>
        </div>
            
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4}>
            <h2>Backend Development</h2>
            <h3>Duration : 4 months</h3>
            <h3>Eligibility : Any final year student or degree holder</h3>
            <h3>Pay After Placement :</h3>
            <button className='btn1'>Explore</button>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={4}>
            <h2>Fullstack Development</h2>
            <h3>Duration : 4 months</h3>
            <h3>Eligibility : Any final year student or degree holder</h3>
            <h3>Pay After Placement :</h3>
            <button className='btn1'>Explore</button>

        </Grid>
    </Grid>
    </div>
   
    </div>
  )
}

export default High