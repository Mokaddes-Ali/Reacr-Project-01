import { Fragment } from 'react';
import '../../Assets/css/style.css';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Forms() {
  return (
    <Fragment>
      <Container className='Forms'>
        <div>
         <Row>
            <Col>
            <div>
            <h3>Quick Contact</h3>
          <Form.Label className='FormsHeader mt-3'>Name</Form.Label>
          <Form.Control className='pt-3' placeholder="" />
          <Form.Label className='FormsHeader mt-3'>Email address</Form.Label>
         <Form.Control className='pt-3' placeholder="" />
         <Form.Label className='FormsHeader mt-3'>Your Message</Form.Label>
         <Form.Control className='p-5' placeholder="" />
         <Button className='mt-3' variant="primary">Submit</Button>
         </div>
         </Col>
          <Col>
          <div className='FormsLeft'>
          <h3 className='ms-3'>Discussion Now</h3>
          <h5 className='FormsHeader ms-3 mt-3'>#Islami Tower,3rd Floor,Mirjapur,Rajshahi</h5>
          <h5 className='FormsHeader ms-3 mt-3 '>E-mail:mokaddes.ru2000@gmail.com</h5>
          <h5 className='FormsHeader ms-3 mt-3'>Contact:+8801402967304</h5>
         </div>
        </Col>
        </Row>
        </div>
      </Container>  
    </Fragment>
  );
}

export default Forms;