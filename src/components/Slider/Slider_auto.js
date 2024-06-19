import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Slider.css';

const Slider_auto = ({ images }) => {
  const chunkSize = 4;
  const slides = [];

  for (let i = 0; i < images.length; i += chunkSize) {
    slides.push(images.slice(i, i + chunkSize));
  }

  return (
    <Container fluid className="my-5">
      <Carousel 
        indicators={false}
        interval={2000} 
        nextIcon={<span aria-hidden="true" className="" />} 
        prevIcon={<span aria-hidden="true" className="" />} 
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <Row>
              {slide.map(image => (
                <Col key={image.id} xs={12} sm={6} md={3} className="position-relative">
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt}
                  />
                  {/* <div className="category-overlay">
                    <h5>{image.category}</h5>
                  </div> */}
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Slider_auto;
