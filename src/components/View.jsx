import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videocard from './Videocard';

function View() {
  return (
 <>
   <Row>
        <Col sm={12} md={6} lg={4} xl={4} >
        <Videocard/>
        </Col>
      </Row>
 </>
  )
}

export default View