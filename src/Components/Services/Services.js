import React, { Component, Fragment } from 'react';
import '../../Assets/css/style.css';
import {Container, Row, Col, Card, } from 'react-bootstrap'
import { RiComputerLine } from "react-icons/ri";
import { MdDeveloperMode } from "react-icons/md";
import { DiPhotoshop } from "react-icons/di";

class Services extends Component {
    render() {
        return (
            
                <Fragment>
                    <Container className='ServicesContainer '>
                    <h2 className='ServicesHeader text-center py-5'>MY SERVICES</h2>
                        <Row>
                            <Col className="d-flex align-items-stretch" lg={4} md={6} sm={12}>
                                <Card  className='CardOne mb-3'>
                                    <Card.Img />
                                     <RiComputerLine className='iconOne'/>
                                    <Card.Body>
                                        <Card.Title className='FirstContentHeading text-center'>Web Development</Card.Title>
                                        <Card.Text className='FirstContentSubHeading text-center'>
                                        I designed and develop static and dynamic websites as per your requirements as we believe "Web is world's netxt home".
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="d-flex align-items-stretch" lg={4} md={6} sm={12}> 
                                <Card className='CardTwo mb-3'>
                                  <MdDeveloperMode className='iconTwo'/>
                                    <Card.Body>
                                        <Card.Title className='SecondContentHeading text-center'>Mobile Development</Card.Title>
                                        <Card.Text className='SecondContentSubHeading text-center'>
                                            I build native and cross platform mobile app for your business and institution as per as your requirements.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="d-flex align-items-stretch" lg={4} md={6} sm={12}>
                                <Card className='CardThree mb-3'>
                                  <DiPhotoshop className='iconThree' />
                                    <Card.Body>
                                        <Card.Title className='ThirdContentHeading text-center'>Grephics Design</Card.Title>
                                        <Card.Text className='ThirdContentSubHeading text-center'>
                                            I design modern user interface and other graphical components for your business and institution.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
           
        );
    }
}

export default Services;