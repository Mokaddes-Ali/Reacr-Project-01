import React, { Component, Fragment } from 'react';
import '../../Assets/css/style.css';
import {Container, Row, Col,Button} from 'react-bootstrap'

class TopHeader extends Component {
    render() {
        return (
            
                <Fragment>
                    <Container className='TopHeaderContainer p-0' fluid>
                        <Container className='TopOverlay' fluid>
                            <Row className='text-center'>
                                <Col className='HeaderContent'>
                                <h1 className='TopHeading'>SOFTWARE ENGINEER</h1>
                                <h3 className='TopSubHeading'>Mobile & Web Application</h3>
                                <Button variant="primary" className='TopButton'>More Info</Button>{' '}
                                </Col>
                            </Row>

                        </Container>

                    </Container>
                </Fragment>
           
        );
    }
}

export default TopHeader;