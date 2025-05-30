import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Mr. Mokoena (Teacher)',
      quote: 'Funanani is one of the most passionate and articulate learners I’ve ever taught.',
    },
    {
      name: 'Thuli Ndlovu (Youth Leader)',
      quote: 'Her leadership in the community is inspiring — a real role model.',
    },
    {
      name: 'Pageant Judge (Miss Unspoken SA)',
      quote: 'She stood out with grace, confidence, and purpose beyond the competition.',
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <section>
      <h2>Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-slide">
            <p className="quote">“{item.quote}”</p>
            <p className="author">— {item.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Testimonials;
