import React from 'react'
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Section7() {
  return (
    <>
    <section className='contact_section'>
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
                <h4>WE Guarantee</h4>
                <h2>30 Minutes Delivery!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, 
                impedit? Vero ipsa enim iusto nam aliquam non id est aut.</p>
                </Col>
                <Link to='/'className='btn btn_red ps-4 py-2 rounded-0'>
                Call: +91-7300028667
                </Link>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Section7