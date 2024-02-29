import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Landing() {
  return (
   <>
   <Container className='mt-5 mb-5'>
    <Row>
      <Col>
         <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
         <p  style={{textAlign:"justify"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis unde et molestiae omnis eius, quis eos debitis maiores assumenda deleniti ea nulla, rerum commodi, repellat facere amet illo aliquam sit?</p>
         <Link to='/home'>
         <button className='btn btn-warning mt-3'>Get Started<i class="fa-solid fa-arrow-right"></i></button>
         </Link>
      </Col>
      <Col>
      <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
      </Col>
    </Row>
   </Container>
   <div className='container'>
      <h3>features</h3>
      <div className='cards d-flex align-items-center justify-content-evenly mt-5'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
   </div>
   <div className='container mb-5 mt-5 border border-2 border-secondary rounded'>
    <Row>
      <Col>
         <h3 className='text-warning mt-5 mb-5'>SIMPLE AND POWERFUL</h3>
         <p><span className='fs-5 fw-bolder'>Play everything</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias sequi, aliquid accusantium inventore recusandae rem nisi odit, itaque voluptate vel odio commodi, saepe eligendi modi aliquam doloremque veniam similique?</p>
         <p><span className='fs-5 fw-bolder'>Play everything</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias sequi, aliquid accusantium inventore recusandae rem nisi odit, itaque voluptate vel odio commodi, saepe eligendi modi aliquam doloremque veniam similique?</p>
         <p><span className='fs-5 fw-bolder'>Play everything</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas molestias sequi, aliquid accusantium inventore recusandae rem nisi odit, itaque voluptate vel odio commodi, saepe eligendi modi aliquam doloremque veniam similique?</p>
      </Col>
      <Col>
        <div className='mt-5'>
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/lpdRqn6xwiM?si=angc7ohwMrcpks9H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Col>
    </Row>
   </div>
   </>
  )
}

export default Landing