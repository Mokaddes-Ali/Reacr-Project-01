import React, { Component, Fragment } from 'react';
import '../../Assets/css/style.css';
import {Container, Row, Col} from 'react-bootstrap';
import SliderLogoOne from '../../Assets/images/sliderOne.jpg';
import SliderLogoTwo from '../../Assets/images/sliderTwo.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class ClientReview extends Component {
    render() {


        var settings = {
            autoplaySpeed: 2000,
            autoplay: true,
            vertical: true,
            verticalSwiping: true,
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };





        return (
           <Fragment>
                <Container className='ClientReviewContainer text-center my-5'>
                <h2 className='ClientReviewHeader mb-3'>CLIENT SAYS</h2>

                <Slider {...settings}>
                <Row className='SliderRow'>
                    <Col>
                    <img className='SliderImage  m-auto' src={SliderLogoOne} alt='' width={250}></img>
                    <h3 className='ReviewHeading'>Web Development</h3>
                    <p className='ClientReviewContent'>I desire modern interface and other graphical components for your business and institution components for your business.I desire modern interface and other graphical components for your business and institution components for your business.</p>
                    </Col>
                </Row>

                <Row className='SliderRow'>
                    <Col>
                    <img className='SliderImage  m-auto' src={SliderLogoTwo} alt='' width={250}></img>
                    <h3 className='ReviewHeading'>Web Development</h3>
                    <p className='ClientReviewContent'>I desire modern interface and other graphical components for your business and institution components for your business.I desire modern interface and other graphical components for your business and institution components for your business.</p>
                    </Col>
                </Row>

                <Row className='SliderRow'>
                    <Col>
                    <img className='SliderImage m-auto' src={SliderLogoOne} alt='' width={250}></img>
                    <h3 className='ReviewHeading'>Web Development</h3>
                    <p className='ClientReviewContent'>I desire modern interface and other graphical components for your business and institution components for your business.I desire modern interface and other graphical components for your business and institution components for your business.</p>
                    </Col>
                </Row>

                <Row className='SliderRow'>
                    <Col>
                    <img className='SliderImage  m-auto' src={SliderLogoTwo} alt='' width={250}></img>
                    <h3 className='ReviewHeading'>Web Development</h3>
                    <p className='ClientReviewContent'>I desire modern interface and other graphical components for your business and institution components for your business.I desire modern interface and other graphical components for your business and institution components for your business.</p>
                    </Col>
                </Row>
                </Slider>
                </Container>
           </Fragment>
        );
    }
}

export default ClientReview;