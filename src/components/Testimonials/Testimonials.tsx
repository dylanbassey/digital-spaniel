import React, { useContext, useEffect, useState } from "react";
import {
  CarouselContainer,
  TestimonalContentStyles,
  TestimonialStyles,
} from "./TestimonialsStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialDesktop, TestimonialMobile } from "./TestimonialCard";
import { TestimonialsContext } from "../../context/context";
import Slider from "react-slick";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { testimonials } = useContext(TestimonialsContext);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const getMiddleIndex = (
    currentSlide: number,
    slidesToShow: number,
    totalSlides: number
  ) => {
    const middleOffset = Math.floor(slidesToShow / 2);
    const middleIndex = (currentSlide + middleOffset) % totalSlides;
    return middleIndex;
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <TestimonialStyles>
      <div className="heading-section">
        Kind words <br /> <span>from our clients</span>
      </div>
      <TestimonalContentStyles>
        {!isMobile ? (
          <CarouselContainer>
            <div className="slider-container">
              <Slider
                {...settings}
                beforeChange={(_, nextSlide) => setCurrentSlide(nextSlide)}
              >
                {testimonials.map((testimonial, index) => {
                  const middleIndex = getMiddleIndex(
                    currentSlide,
                    settings.slidesToShow,
                    testimonials.length
                  );

                  return (
                    <TestimonialDesktop
                      key={testimonial.id}
                      testimonial={testimonial}
                      selected={index === middleIndex}
                    />
                  );
                })}
              </Slider>
            </div>
          </CarouselContainer>
        ) : (
          <div className="mobile-container">
            {testimonials.map((testimonial) => (
              <TestimonialMobile
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        )}
      </TestimonalContentStyles>
    </TestimonialStyles>
  );
};

export default Testimonials;
