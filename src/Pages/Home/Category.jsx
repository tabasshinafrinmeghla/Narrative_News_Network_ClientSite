import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      <h3>this is Category :{categoryNews.length}</h3>
    </div>
  );
};

export default Category;