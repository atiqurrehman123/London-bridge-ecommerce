import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from "swiper";

import "swiper/swiper-bundle.css";
import React from 'react'
const slider = [
  {
    image:
      "https://cdn.shopify.com/s/files/1/0144/7827/8739/files/AY5A1606_1400x.jpg?v=1679744825",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0144/7827/8739/files/AY5A1498_1400x.jpg?v=1679744798",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0144/7827/8739/files/DSC00201_1400x.jpg?v=1645866520",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0144/7827/8739/files/AY5A3907_1400x.jpg?v=1621609033",
  },
  {
    image:
      "https://cdn.shopify.com/s/files/1/0144/7827/8739/files/London_Bridge-Main_Banner_1400x.jpg?v=1686140020",
  },

];
SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

const ImageSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    const [controlledSwiper, setControlledSwiper] = React.useState(null);
    console.log(slider[0].image1,"image")
     const slides = [];
     for (let i = 0; i < 5; i += 1) {
       slides.push(
         <SwiperSlide key={`slide-${i}`} tag="li">
           <img
             width={"100%"}
             //  src={`https://picsum.photos/id/${i + 1}/500/300`}
             src={slider[i].image}
             style={{ listStyle: "none", objectFit: "contain" }}
             alt={`Slide ${i}`}
           />
         </SwiperSlide>
       );
     } 

    return (
      <Box>
        <Swiper
          id="main"
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          tag="section"
          wrapperTag="ul"
          navigation
          // pagination
          spaceBetween={100}
          slidesPerView={1}
          onInit={(swiper) => console.log("Swiper initialized!", swiper)}
          onSlideChange={(swiper) => {
            console.log("Slide index changed to: ", swiper.activeIndex);
          }}
          onReachEnd={() => console.log("Swiper end reached")}
        >
          {slides}
        </Swiper>
      </Box>
    );
}

export default ImageSlider