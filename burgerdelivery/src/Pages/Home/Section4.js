import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PromotionImage from '../../assets/promotion/pro.png';


function Section4() {
    return (
        <>
        <section className='promotion_section'>

            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} className='text-center mb-5 mb-lg-0'>
                        <img src={PromotionImage} className='img-fluid' alt='promotion' />

                    </Col>
                    <Col lg={6} className='px-5'>
                        <h2>Nothing brings people together like a good burger </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maiores sint
                            quo veritatis, in repellat provident alias reprehenderit natus architecto.</p>

                        <ul>
                            <li>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit expedita
                                    quod, excepturi,totam laboriosam a ad dolor consequatur quisquam commodi
                                    distinctio voluptatem aspernatur dolorum.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ducimus,
                                    id ab earum adipisci unde.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ducimus,
                                    id ab earum adipisci unde xcepturi,totam laboriosam a ad dolor consequatur.
                                </p>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </Container>

            {/* Bg parallax scroll */}
            
        </section>
        <section className='bg_parallax_scroll'></section>
        </>
    )
}

export default Section4