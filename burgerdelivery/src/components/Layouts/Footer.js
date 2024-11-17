import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Footer() {

  // Scroll stap

  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  })
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Location</h5>
                <p>Gujarat</p>
                <p>Sayyed Pura Market near variyali bazar,</p>
                <p>Surat</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Working Hours</h5>
                <p>Mon-Fri: 11:00AM - 10:00PM</p>
                <p>Saturday: 11:00AM - 11:00PM</p>
                <p>Sunday: Closed</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Order Now</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><Link to='tel:7300028667' className='calling'>+91-7300028667</Link></p>

              </div>
            </Col>

            <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
              <div className='text-center'>
                <h5>Follow Us</h5>
                <p>Lorem ipsum dolor sit amet</p>
                <ul className='list-unstyled text-center mt-2'>
                  <li>
                    <Link to='/'>
                      <i class="bi bi-facebook"></i>
                    </Link>
                  </li>

                  <li>
                    <Link to='/'>
                      <i class="bi bi-instagram"></i>
                    </Link>
                  </li>

                  <li>
                    <Link to='/'>
                      <i class="bi bi-twitter-x"></i>
                    </Link>
                  </li>

                  <li>
                    <Link to='/'>
                      <i class="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className='copy_right'>
            <Col>
              <div>
                <ul className='list-unstyled text-center mb-0'>
                  <li>
                    <Link to='/'>
                      2024 | <span>Meerbaj khan</span>. All Rights Reserved.
                    </Link>
                  </li>

                  <li>
                    <Link to='/'>
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link to='/'>
                      Terms Of Use
                    </Link>
                  </li>

                  <li>
                    <Link to='/'>
                      Privacy Policy
                    </Link>
                  </li>

                </ul>
              </div>
            </Col>

          </Row>
        </Container>
      </footer>

      {/* scroll to top */}
      {
        isVisible && (
          <div className='scroll_top' onClick={scrollTop}>
            <i class='bi bi-arrow-up'></i>
          </div>
        )
      }

    </>
  )
}

export default Footer