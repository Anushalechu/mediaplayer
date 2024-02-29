import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Videocard() {
  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height="300px" width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLX5OLDZIIerjxwswf8DAeeCJgu7mLqsHIIRRwJHVjvg&s" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <div className='d-flex align-items-center justify-content-evenly'>
          <h6>variant caption</h6>
          <Button variant="danger" className='ms-5'>
          <i class="fa-solid fa-trash"></i>
          </Button>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default Videocard