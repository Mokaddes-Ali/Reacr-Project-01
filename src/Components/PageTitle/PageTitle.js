import React, { Component, Fragment } from 'react';
import '../../Assets/css/style.css';
import {Container, Row, Col,Button} from 'react-bootstrap'

class PageTitle extends Component {
    render() {
        return (
            
                <Fragment>
                    <Container className='TitleHeaderContainer p-0' fluid>
                        <Container className='TitleOverlay' fluid>
                            <Row className='text-center'>
                                <Col className='HeaderContent'>
                                <h1 className='TitleHeading'>{this.props.PageTitle}</h1>
                                </Col>
                            </Row>

                        </Container>

                    </Container>
                </Fragment>
           
        );
    }
}

export default PageTitle;