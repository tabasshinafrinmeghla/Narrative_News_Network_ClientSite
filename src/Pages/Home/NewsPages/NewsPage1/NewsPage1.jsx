import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
// import Category from '../../Category';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import EditorsInside from '../../../../EditersInside/EditorsInside';

const NewsPage1 = () => {
  const news = useLoaderData();


  const { _id, image_url, details, name, title, total_view, author, number, badge, category_id } = news;


  return (
    <div>
      <Card >
        <Card.Img className='p-4' variant="top" src={image_url} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>


          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="primary"><FaArrowAltCircleLeft></FaArrowAltCircleLeft> All News </Button>  </Link>

        </Card.Body>
      </Card>
      <EditorsInside></EditorsInside>

    </div>
  );
};

export default NewsPage1;



