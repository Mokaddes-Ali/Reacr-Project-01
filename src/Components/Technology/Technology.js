import React, { Component, Fragment } from 'react';
import '../../Assets/css/style.css';
import {Container, Row, Col} from 'react-bootstrap'
import {BarChart, XAxis, Bar, Tooltip} from 'recharts';



class Technology extends Component {

            constructor(){
                super();

                this.state = {
                    data:[
                        {Technology:'Java', Student: 100},
                        {Technology:'Kotlin', Student: 40},
                        {Technology:'Sql', Student: 80 },
                        {Technology:'Jquery', Student: 90},
                        {Technology:'React', Student: 75},
                        {Technology:'PHP', Student: 100},
                        {Technology:'Angular', Student: 70},
                    ]
                }
                
            }


    render() {
        
            return (
            
              <Fragment>
                <Container className='TechnologyContainer '>
                    <h2 className='TechnologyHeader text-center py-5'>Technology Used</h2>
                    <Row className='TechnologyContent pt-4'>
                        <Col className='lg={3} md={4} sm={12}'>
                                <BarChart width={550} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology" />
                                    <Tooltip />
                                    <Bar dataKey="Student" fill="#4C9DED"/>
                                   
                                   
                                </BarChart>
                        </Col>

                            <Col className='p-0 lg={6} md={6} sm={12}'>
                                <p className='SimpleContent'>To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application I use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>
                                <p className='SimpleContent'>I always build dynamic application. Admin panet is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP. Codelgniter and Laravel to build admin panel section.</p>
                                <p className='SimpleContent'>Application secunity is a big deal for commercial application. I always ensure security portion of my application. moreover i build a security alert system. to notify admin when his system at risk.</p>
                            </Col>
                    </Row>
                </Container>
              </Fragment>
            
        );
    }
}

export default Technology;