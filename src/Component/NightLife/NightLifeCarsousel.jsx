import React from 'react'
import Slider from 'react-slick';

//Component
import{NextArrow, PrevArrow} from '../CrouselArrow'
import PictureCarouselCard from '../Dining/PictureCarouselCard';

function NightLifeCarousel() {

    const settings = {
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll:3,
              infinite:true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll:2,
              initialSlide:2,
            },
          },
          {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
          },
        },
        ],
      };


    return (
        <div className='w-full px-3 lg:px-20  ' >
            <Slider {...settings}>
                <PictureCarouselCard/>
                <PictureCarouselCard/>
                <PictureCarouselCard/>
                <PictureCarouselCard/>
                <PictureCarouselCard/>
                <PictureCarouselCard/>
                <PictureCarouselCard/>
                <PictureCarouselCard/>
                <PictureCarouselCard/>
            </Slider>
        </div>
    )
}

export default NightLifeCarousel;
