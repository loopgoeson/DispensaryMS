import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from 'react-bootstrap';
import dr from "../Asset/dr1.png";
import { Link } from 'react-router-dom';
import './LoginAdmin.css'
const LoginAdmin = () => {
  return (
    <Form className='form'>
        <Card >
          <Card.Img className='img' variant="top" src={dr} />
          <Card.Body>
            <Card.Title style={{fontWeight:700, marginLeft:160, fontSize:28}}>Admin</Card.Title>
          </Card.Body>
        </Card>
    <Form.Group className="pwd mb-3 " controlId="formBasicPassword">
      <Form.Control type="password" placeholder=" Enter Password" />
    </Form.Group>
    <Button variant="outline-primary" type="submit">
    <Link to="/AdminPortal">Proceed</Link>
    </Button>
  </Form>
  )
}

export default LoginAdmin
