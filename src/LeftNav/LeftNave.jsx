import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNave = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <h4>All Categories</h4>
      <div className='p-4 bg-light-subtle '>
        {
          categories.map(category => <p
            key={category.id}>
            <Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link>
          </p>
          )
        }
      </div>
    </div>
  );
};

export default LeftNave;