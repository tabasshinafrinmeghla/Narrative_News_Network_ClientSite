import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {


  const { _id, image_url, details, published_date, name, title, total_view, author, rating, number, badge, thumbnail_url} = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header>
          <Image src={author.img} roundedCircle />
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 300 ? <>{details} </> : <>{details.slice(0, 300)} ... <Link to={`/news/${_id}`}>Read moor</Link>   </>}
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
