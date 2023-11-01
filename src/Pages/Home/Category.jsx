import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard/Newscard';

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      <h3>this is Category :{categoryNews.length}</h3>

      {
        categoryNews.map(news => <NewsCard
          key={news._id}
          news={news}
        ></NewsCard>)
      }
    </div>
  );
};

export default Category;