import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFileImport, FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const NewsCard = ({ news }) => {


  const { _id, image_url, details, title, total_view, author, rating } = news;
  return (
    <div>
      <Card className="mb-4">
        <Card.Header className='d-flex align-items-center'>
          <Image style={{ height: '50px' }} src={author?.img} roundedCircle />
          {/* moment().format("MMM Do YY"); */}
          <div className='ps-2 flex-grow-1'>
            <p className='mb-0'>{author?.name}</p>

            <p><small>{moment(author?.published_date).format("MMM Do YY")} </small></p>
          </div>


          <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>

          </div>

        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 300 ? <>{details} </> : <>{details.slice(0, 300)} ... <Link to={`/news/${_id}`}>Read moor</Link>   </>}
          </Card.Text>

        </Card.Body>
        <Card.Footer className="text-muted">
          <div className='d-flex '>
            <div className='flex-grow-1'>
              <span>{rating?.number}</span>
              <Rating style={{ maxWidth: 250 }} value={rating} readOnly />
            </div>
            <div>
              <FaRegEye></FaRegEye> {total_view}
            </div>
          </div>

        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsCard;
