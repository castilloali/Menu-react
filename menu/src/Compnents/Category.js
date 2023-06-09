import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'

const Category = ( {filterByCategory, allCategory}) => {


  const onfilter = (cat) => {
    filterByCategory(cat) 
  }
  return (
    <Row>
        <Col ms="12" className='d-flex justify-content-center  pb-5'>
          {
            allCategory.length >= 1 ? (
              allCategory.map((category) => {
                return (
                  <div className='button' >
                  <Button onClick={() => onfilter(category)}>{category}</Button>
                </div>
                )
              })
            ) : (
              <h2> لا يوجد تصنيفات </h2>
            )
          }

        </Col>
    </Row>

  )
}

export default Category
