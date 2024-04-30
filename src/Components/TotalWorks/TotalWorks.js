import React, { Component, Fragment} from 'react';
import '../../Assets/css/style.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { AiFillCheckCircle } from "react-icons/ai";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class TotalWorks extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='TotalWorksContainer p-0'>
                    <div className='TopWorksOvarlay'>
                        <Container className='OvarlayContainer'>
                            <Row className='OverlayContent text-center'>

                                <Col className='ProjectsCollum'>
                                <h1 className='TotalProjects'>
                                <CountUp start={0} end={150}>
                                            {({ countUpRef, start }) => (
                                                <div>

                                            <VisibilitySensor onChange ={start}> 
                                                    <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                </div>
                                            )}
                                        </CountUp>
                                    </h1>
                                <h3 className='ProjectsHeader'>TOTAL PROJECTS</h3>
                                <div className='ProjectsUnderline m-auto mt-3'></div>
                                </Col>

                                <Col className='ClientsCollum'>
                                <h1 className='TotalClients'>
                                <CountUp start={0} end={250}>
                                            {({ countUpRef, start }) => (
                                                <div>

                                            <VisibilitySensor onChange ={start}> 
                                                    <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                </div>
                                            )}
                                        </CountUp>
                                </h1>
                                <h3 className='ClientsHeader'>TOTAL CLIENTS</h3>
                               <div className='ClientsUnderline m-auto mt-3'></div>
                                </Col>

                                <Col>
                                    <Card  className='WorksCard' style={{ width: '18rem' }}>
                                        <Card.Body className='TotalWorksCardBody'>
                                            <Card.Title className='WorksHeader'>How I work</Card.Title>
                                            <Card.Text>
                                                <p className='Content'><AiFillCheckCircle className='Icon' />Reqquirement Gathering</p>
                                                <p className='Content'><AiFillCheckCircle className='Icon' /> System Analysis</p>
                                                <p className='Content'><AiFillCheckCircle className='Icon' />Coding Testing</p>
                                                <p className='Content'><AiFillCheckCircle className='Icon' />Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                            </Col>

                            </Row>
                            
                            
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TotalWorks;