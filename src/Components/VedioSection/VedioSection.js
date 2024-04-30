import React, { Component, Fragment } from 'react';
import '../../Assets/css/style.css';
import { useState } from 'react';
import {Button, Container} from 'react-bootstrap';
import { FaPlayCircle } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Fragment>
        <Container className='VedioSectionContainer text-center my-5'>
          <h2 className='VedioSectionHeader'>How I do</h2>
          <p className='VedioSectionContent'>First I analysis the requirement of project. According to the requirement I make a proper technical analysis, then I build a software architecture. According to the planning I start coding. Testing is also going on a with coding. Final tesing take place after finising coding part. After succesful implemantation I provide 6 month free bug fixing service for corresponding project</p>
          <p variant="primary" onClick={handleShow}><FaPlayCircle className='VedioIcon' /></p>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>You are Man</Modal.Title>
            </Modal.Header>
            <Modal.Body>What's your sex?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Yes
              </Button>
              <Button variant="primary" onClick={handleClose}>
                No
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Fragment>
    </>
  );
}

export default Example;