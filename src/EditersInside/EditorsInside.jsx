import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first from '../Img/1.png'
import second from '../Img/2.png'
import third from '../Img/3.png'

import forth from '../Img/4.jpg'
import fifth from '../Img/5.webp'
import sixth from '../Img/6.jpg'
import seventh from '../Img/7.jpg'
import eight from '../Img/8.webp'
import nine from '../Img/9.webp'
import ten from '../Img/10.jpg'

const EditorsInside = () => {
  return (

    <Row xs={1} md={2} lg={3} className="g-3 ">


      <Col  >
        <Card className='mt-2'>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className='mt-2'>
          <Card.Img variant="top" src={second} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col >
        <Card className='mt-2'>
          <Card.Img variant="top" src={third} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className='mt-2'>
          <Card.Img variant="top" src={forth} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className='mt-2'>
          <Card.Img variant="top" src={fifth} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className='mt-2'>
          <Card.Img variant="top" src={sixth} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className='mt-2'>
          <Card.Img variant="top" src={seventh} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className='mt-2'>
          <Card.Img variant="top" src={eight} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className='mt-2'>
          <Card.Img variant="top" src={nine} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col >
        <Card className='mt-2'>
          <Card.Img variant="top" src={ten} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>


    </Row>

  );
};

export default EditorsInside;