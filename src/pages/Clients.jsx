// src/ClientLogoSwiper.js
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import partner1 from "../../public/partner-1.png"
import partner1hover from "../../public/partner-hover1.png"
import partner2 from "../../public/partner-2hover.png"
import partner2hover from "../../public/partner-2.png"
import partner3 from "../../public/partner-3hover.png"
import partner3hover from "../../public/partner-3.png"
import './Clients.css'; // Optional for additional styling
import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import "./BrandCarousel.scss";

export default function Clients({ hasBg }) {
    const images = [
        partner1,
        partner2,
        partner3 // Repeat for continuous loop
      ];
    
      // Owl Carousel options
      const options = {
        items: 3, // Number of items to show
        loop: true, // Infinite loop
        autoplay: true, // Auto-play
        autoplayTimeout: 3000, // Auto-play interval in milliseconds
        autoplayHoverPause: true, // Pause on hover
        nav: false, // Hide navigation buttons
        dots: false, // Hide dots navigation
      };
    
      return (
        <div style = {{display :" flex", width : "1000px", alignItems : "center", justifyContent : "center"}}>
<OwlCarousel className="owl-theme" {...options} style={{display :" flex", alignItems : "center", justifyContent : "center"}}>
          {images.map((image, index) => (
            <div key={index} className="item" style={{display :" flex", alignItems : "center", justifyContent : "center"}}>
              <img className = "logo"  src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </OwlCarousel>
        </div>
        
      );
}
