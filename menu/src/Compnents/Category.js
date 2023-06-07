import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'

const Category = () => {

  return (
    <Row>
        <Col ms="12" className='d-flex justify-content-center  pb-5'>
            <div className='button ' >
                <Button>الكل</Button>
                <Button>فطار</Button>
                <Button>غداء</Button>
                <Button>عشاء</Button>
            </div>
        </Col>
    </Row>

  )
}

export default Category
