import React from 'react'
import { Button,Nav , Container, Form, Navbar, Row } from 'react-bootstrap'






const Navbarw = () => {
  return (
    <Row>
        <Navbar className='navbar' expand="lg">
        <Container >
            <Navbar.Brand className='logo' href="#" >وجبات تخينه</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
            </Nav>
            <Form className="d-flex">
                <Form.Control
                type="text"
                placeholder="ابحث..."
                className="me-2"

                />
                <Button variant="outline-success">بحث</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </Row>
  )
}

export default Navbarw
