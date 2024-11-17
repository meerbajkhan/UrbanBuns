import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/salad.png';
import Delivery from '../../assets/about/salad.png';


const mockData = [
  {
    image: Pizza,
    title: 'Orginal',
    paragraph: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sit nobis, distinctio est culpa porro!',
  },
  {
    image: Salad,
    title: 'Quality Foods',
    paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est assumenda nihil esse a eum cum.',
  },
  {
    image: Delivery,
    title: 'Fastest Delivery',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae neque inventore cupiditate nulla nihil distinctio.',
  }
]
function Section2() {
  return (
    <>
      <section className='about_section'>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className='text-center'>
              <h2>The burger test is better</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deserunt rem illo recusandae ipsa id ea sed quidem veniam. 
                Alias quo magnam quisquam nulla magni cumque eius vitae vero illo architecto?
              </p>
              <Link to='/' className='btn order_now btn_red'>
              Explore full menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='about_wrapper'>
        <Container>
          <Row className='justify-content-md-center'>{mockData.map((cardData,index)=>(
            <Col md={6} lg={4} className='mb-4 mb-md-0' key={index}>
              <div className='about_box text-center'>
                <div className='about_icon'>
                  <img src={cardData.image} className='img-fluid' alt='icon' />

                </div>
                <h4>{cardData.title}</h4>
                <p>{cardData.paragraph}</p>
              </div>
            </Col>
          ))}

          </Row>
        </Container>
      </section>

    </>
  )
}

export default Section2