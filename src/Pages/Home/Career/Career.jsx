import React from 'react';

const Career = () => {
  return (
    <div className='p-5'>
      <h2>Narrative News NetworkS</h2>
      <h3>64-65, Kazi Nazrul Islam Avenue, Dhaka-1215</h3>
      <h3>Phone: 09610222222, 9144330, 58156305</h3>
      <h3>Fax: 9144332, 58156307 & 58156306</h3>
      <h4>GPO Box. 3257</h4>
      <div>
        <table responsive className='bg-secondary m-4'>
          <thead >
            <tr >
              <th className='p-4'>#</th>
              {Array.from ({ length: 12 }).map((_, index) => (
                <th key={index}>Rahim</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-4'>1</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Narrative News Network's {index}</td>
              ))}
            </tr>
            <tr>
              <td className='p-4'>2</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Narrative News Network's {index}</td>
              ))}
            </tr>
            <tr>
              <td className='p-4'>3</td>
              {Array.from({ length: 12 }).map((_, index) => (
                <td key={index}>Narrative News Network's {index}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Career;