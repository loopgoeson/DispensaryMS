import React from 'react'
import { Card, Button} from 'react-bootstrap'
import './AdminPortal.css'
import { Link } from 'react-router-dom'

const AdminPortal = () => {
  return (
    <div className='cards'>
      <Card >
          <Card.Img className='img' variant="top" />
          <Card.Body>
          <Button variant="outline-primary" type="submit" >
         <Link to="/AppointDisplay">Appointments</Link>
        </Button>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img className='img' variant="top" />
          <Card.Body>
          <Button variant="outline-primary" type="submit" >
         <Link to="/AppointDisplay">Pharmacy Orders</Link>
        </Button>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img className='img' variant="top" />
          <Card.Body>
          <Button variant="outline-primary" type="submit" >
         <Link to="/AppointDisplay">Add medicines</Link>
        </Button>
          </Card.Body>
        </Card>
        <Card >
          <Card.Img className='img' variant="top" />
          <Card.Body>
          <Button variant="outline-primary" type="submit" >
         <Link to="/AppointDisplay">Feedback/query</Link>
        </Button>
          </Card.Body>
        </Card>
    </div>
  )
}

export default AdminPortal
