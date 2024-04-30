import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../../Assets/css/style.css';
import { FaFacebook, FaYoutube  } from "react-icons/fa";



class FooterTop extends Component {
    render() {
        return (
            <Fragment>
                <div className='ShadowTop'></div>
                <Container className='FooterTopContainer py-5'>
                    <Row>
                        <Col lg={3} md={6} sm={12}>
                        <h5 className='FooterHeader'>Follow Me</h5>
                        <p className='FooterFirst'><FaFacebook className='FooterIcons' />Facebook</p>
                        <p className='FooterFirst'><FaYoutube className='FooterIcons' />YouTube</p>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                        <h5 className='FooterHeader'>Address</h5>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                        <h5 className='FooterHeader'>Information</h5>
                        <p className='FooterContent'>About Me</p>
                        <p className='FooterContent'>My Resume</p>
                        <p className='FooterContent'>Contact Me</p>
                        </Col>

                        <Col lg={3} md={6} sm={12}>
                        <h5 className='FooterHeader'>Legal</h5>
                        <p className='FooterContent'>Refund Policy</p>
                        <p className='FooterContent'>Terms and Condition</p>
                        <p className='FooterContent'>Privacy Policy</p>
                        </Col>
                    </Row>
                
                </Container>
                <Row>
                        <Col className='EmptySpace'>
                        </Col>
                    </Row>
                
            </Fragment>
        );
    }
}

export default FooterTop;