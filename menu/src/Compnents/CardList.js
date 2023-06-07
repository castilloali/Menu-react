import React from 'react'
import { Col, Row } from 'react-bootstrap'

const CardList = ({itemsData}) => {
  return (
    <Row className='my-3'>

        {
            itemsData.length >= 1 ? (


                itemsData.map((items) =>{
                    return (
                        <Col sm="12" className='mt-2'>
                        <div class="card flex-row flex-wrap">
                            
                            <img className='img-card' src='image/img (1).jpg' />
                            <div className='title p-3 ' >
                                <div className='head-card d-flex justify-content-between '>
                                    <h2 className='fw-bold'>{items.title}</h2>
                                    <h4 className='price'>{items.price}$</h4>
                                </div>
                                <p>وصف وجبة الفطار وصف وجبة الفطار وصف وجبة وصف وجبة الفطار </p>
                            </div>
                        </div>
                        </Col>
                    )
                })







            ) : (<h1>لا يوجد عناصر</h1>)

        }
       
    </Row>
  )
}

export default CardList
