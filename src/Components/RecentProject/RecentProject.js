import React, { Component, Fragment } from 'react';
import '../../Assets/css/style.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import recentimg from '../../Assets/images/RecentProject.png';



class RecentProject extends Component {
    render() {
        return (
            
               <Fragment>
                <Container className='RecentProjectContainer pb-5'>
                    <h2 className='RecentProjectHeader text-center py-5'>Recent Project</h2>
                    <Row>
                            <Col className="d-flex align-items-stretch" lg={4} md={6} sm={12}>
                                <Card className='RecentProjectCards mb-3' style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src={recentimg} />
                                    <Card.Body>
                                        <Card.Title className='FirstCardTittle text-center'>Web Development</Card.Title>
                                        <Card.Text className='FirstCardContent text-center'>
                                        Some Quick example text to build on the card title and make.
                                        </Card.Text>
                                        <div className='text-center'>
                                        <Button variant="primary" className='FirstButton'>Details</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="d-flex align-items-stretch" lg={4} md={6} sm={12}>
                                <Card className='RecentProjectCards mb-3' style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src={recentimg} />
                                    <Card.Body>
                                        <Card.Title className='SecondCardTittle text-center'>Graphic Design</Card.Title>
                                        <Card.Text className='SecondCardContent text-center'>
                                            Some Quick example text to build on the card title and make.
                                        </Card.Text>
                                        <div className='text-center'>
                                        <Button variant="primary" className='SecondButton'>Details</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="d-flex align-items-stretch" lg={4} md={6} sm={12}>
                                <Card className='RecentProjectCards mb-3' style={{ width: '22rem' }}>
                                    <Card.Img variant="top" src={recentimg} />
                                    <Card.Body>
                                        <Card.Title className='ThirdCardTittle text-center'>Mobile App</Card.Title>
                                        <Card.Text className='ThirdCardContent text-center'>
                                            Some Quick example text to build on the card title and make.
                                        </Card.Text>
                                        <div className='text-center'>
                                        <Button variant="primary" className='ThirdButton'>Details</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                    </Row>
                </Container>
               </Fragment>
            
        );
    }
}

export default RecentProject;