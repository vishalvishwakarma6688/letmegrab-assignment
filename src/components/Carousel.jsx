import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import image1 from '../assets/IMG-20251210-WA0001.jpg'
import image2 from '../assets/IMG-20251210-WA0002.jpg'
import image3 from '../assets/IMG-20251210-WA0003.jpg'
import image4 from '../assets/IMG-20251210-WA0004.jpg'
import image5 from '../assets/IMG-20251210-WA0005.jpg'
import image6 from '../assets/IMG-20251210-WA0006.jpg'
import image7 from '../assets/IMG-20251210-WA0007.jpg'
import image8 from '../assets/IMG-20251210-WA0008.jpg'
import image9 from '../assets/IMG-20251210-WA0009.jpg'

const images = [
  image1, image2, image3, image4, image5,
  image6, image7, image8, image9
]

const CarouselComponent = () => {
  return (
    <div style={{ maxWidth: "100vw", height: "85vh" }}>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        interval={2500}
        swipeable
        emulateTouch
      >
        {images.map((img, i) => (
          <div key={i} className="h-[85vh]">
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselComponent
