import React from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StoreIOS from '../../assets/shop/appstore.png';
import StoreGoggle from '../../assets/shop/googleplay.png';
import DownloadImage from '../../assets/shop/e-shop.png';
import Brand1 from '../../assets/brands/brand-11.png';
import Brand2 from '../../assets/brands/brand-12.png';
import Brand3 from '../../assets/brands/brand-13.png';
import Brand4 from '../../assets/brands/brand-14.png';
import Brand5 from '../../assets/brands/brand-15.png';
import Brand6 from '../../assets/brands/brand-16.png';
import Brand7 from '../../assets/brands/brand-17.png';
import Brand8 from '../../assets/brands/brand-18.png';


function Section5() {
    return (
        <>
            <section className='shop_section'>
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={6} className='text-center text-lg-start mb-5 mb-lg-0'>
                            <h4>Download mobile app and</h4>
                            <h2>save up to 20%</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
                                magni eius aliquid omnis corporis quo quasi reprehenderit similique eos officia?
                            </p>
                            <Link to='/'>
                                <img src={StoreIOS} alt='IOS' className='img-fluid me-3'>
                                </img>
                            </Link>
                            <Link to='/'> <img src={StoreGoggle} alt='Android' className='img-fluid me-3' /></Link>
                        </Col>

                        <Col lg={6}>
                            <img src={DownloadImage} alt='e-shop' className='img-fluid'></img>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='brand_section'>
                <Container>
                    <Row>
                        <Carousel >
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <div className='brand_img'>
                                        <img src={Brand3} className='img-fluid' alt='brand-1'/> 
                                        </div>
                                    
                                        <div className='brand_img'>
                                        <img src={Brand4} className='img-fluid' alt='brand-2'/>
                                        </div>
                                    
                                        <div className='brand_img'>
                                        <img src={Brand5} className='img-fluid' alt='brand-3'/> 
                                        
                                    </div>

                                        <div className='brand_img'>
                                        <img src={Brand6} className='img-fluid' alt='brand-4'/>  
                                        
                                    </div>
                                    <div className='brand_img'>
                                        <img src={Brand7} className='img-fluid' alt='brand-4'/>  
                                        
                                    </div>
                                        
                                  </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className='d-flex align-items-center justify-content-center'>
                                        <div className='brand_img'>
                                        <img src={Brand5} className='img-fluid' alt='brand-4'/>  
                                       
                                    </div>
                                    
                                        <div className='brand_img'>
                                        <img src={Brand6} className='img-fluid' alt='brand-5'/> 
                                       
                                    </div>
                                    
                                        <div className='brand_img'>
                                        <img src={Brand7} className='img-fluid' alt='brand-6'/>   
                                        
                                    </div>
                                        <div className='brand_img'>
                                        <img src={Brand8} className='img-fluid' alt='brand-7'/>
                                        
                                    </div>
                                    </div>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                          
                               
                        </Carousel>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Section5