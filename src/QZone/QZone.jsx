import React from 'react';
import QZone1 from '../Img/qZone1.png'
import QZone2 from '../Img/qZone2.png'
import QZone3 from '../Img/qZone3.png'

const QZone = () => {
  return (
    <div className='bg-light text-center  my-4 py-4'>
      <h4 >Q-Zone</h4>
      <div className='m-2'>
        <img className='m-2' src={QZone1} alt="" />
        <img className='m-2' src={QZone2} alt="" />
        <img className='m-2' src={QZone3} alt="" />
      </div>
    </div>
  );
};

export default QZone;