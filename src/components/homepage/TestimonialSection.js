"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../custom-slick.css"; // Import custom CSS for additional styles

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, ABC Inc.",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lobortis justo. Proin mollis scelerisque ex.",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Manager, XYZ Corp.",
    message:
      "Fusce volutpat tortor sit amet massa sagittis, ac iaculis odio congue. Nam maximus vestibulum lorem.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
      "Nullam non mauris nec arcu posuere fermentum. Aliquam id orci vel elit accumsan gravida.",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Designer, LMN Inc.",
    message:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  // Add more testimonials as needed
];

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-800 pt-10 pb-20">
      <div className="mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">
          Testimonials
        </h2>
        <div className="max-w-5xl mx-auto px-4">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 h-full transition-transform transform hover:scale-105 hover:shadow-2xl">
        <p className="text-gray-700 mb-4 italic">{testimonial.message}</p>
        <div className="flex items-center mt-6">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold text-xl">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-800">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TestimonialSection;
