import React from 'react'


import { Col, Row } from 'react-bootstrap'

const Header = () => {
  return (
    <Row>
    <Col ms="12" >
        <div className='d-flex justify-content-center text-center header mt-5'>
            <h2 className='p-2 '>
            قايْمة الطعام
            </h2>
        </div>
    </Col>

    </Row>
  )
}

export default Header
