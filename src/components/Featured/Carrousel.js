import React from 'react'
import Slider from "react-slick";

 const Carrousel = () => {
     const settings = {
         dots: false,
         infinite: true,
         autoplay: true,
         speed: 500
     }

  return (
    <div className="carrousel_wrapper"
    style={{
        height:`${window.innerHeight}px`,
        overflow:'hidden',

    }}
    >
      
    </div>
  )
}

export default Carrousel;