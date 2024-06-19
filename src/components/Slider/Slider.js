import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './Slider.css';

const Slider = ({ images }) => {
  const chunkSize = 4;
  const slides = [];

  for (let i = 0; i < images.length; i += chunkSize) {
    slides.push(images.slice(i, i + chunkSize));
  }

  return (
   <>
  
    <Container className="my-5">
      <Carousel 
        controls={true} 
        indicators={false} 
        interval={null} // null means no automatic sliding
        keyboard={false} // disable keyboard controls
        pause={false} // disable pausing on hover
        wrap={false} // prevent wrap around at the edges
        nextIcon={<span aria-hidden="true" className="fas fa-chevron-right" />}
        prevIcon={<span aria-hidden="true" className="fas fa-chevron-left" />}
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
                  <div className="category-overlay">
                    <h5>{image.category}</h5>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
   </>
  );
};

export default Slider;
