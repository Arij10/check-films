import {Modal ,Button , Form } from 'react-bootstrap';
import { useState } from 'react';


export default function Add() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add New Movie 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie Title</Form.Label>
    <Form.Control type="email" placeholder="Give The Title Of The Movie " />
    <Form.Label>Movie description</Form.Label>
    <Form.Control type="email" placeholder="Give A Brief Description" />
    <Form.Label>PosterURL</Form.Label>
    <Form.Control type="email" placeholder="Give The Adress Of The Poster" />
    <Form.Label>MovieRating</Form.Label>
    <Form.Control type="email" placeholder="Give The Rate Of The Movie" />

    </Form.Group>
</Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  
