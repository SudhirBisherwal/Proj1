import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Image.css"

function Image() {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:9 ,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      };
    
  return (
    <div className="carousel-container1">
      <Slider {...settings} style={{marginBottom:"40px"}} >
        <div>
          <img src="img6.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img7.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img8.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img9.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img10.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img6.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img7.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img8.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img9.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img10.png" alt="" width="50%"/>
        </div>
      </Slider>



      <Slider {...settings} style={{marginBottom:"40px"}}>
        <div>
          <img src="img6.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img7.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img8.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img9.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img10.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img6.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img7.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img8.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img9.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img10.png" alt="" width="50%"/>
        </div>
      </Slider>

      <Slider {...settings} style={{marginBottom:"40px"}}>
        <div>
          <img src="img6.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img7.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img8.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img9.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img10.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img6.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img7.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img8.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img9.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img10.png" alt="" width="50%"/>
        </div>
      </Slider>

      <Slider {...settings} style={{marginBottom:"40px"}}>
        <div>
          <img src="img6.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img7.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img8.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img9.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img10.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img6.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img7.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img8.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img9.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img10.png" alt="" width="50%"/>
        </div>
      </Slider>

      <Slider {...settings} style={{marginBottom:"40px"}}>
        <div>
          <img src="img6.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img7.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img8.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img9.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img10.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img6.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img7.png" alt='' width="50%"/>
        </div>
        <div>
          <img src="img8.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img9.png" alt="" width="50%"/>
        </div>
        <div>
          <img src="img10.png" alt="" width="50%"/>
        </div>
      </Slider>
    </div>
  )
}

export default Image