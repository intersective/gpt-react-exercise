import React from 'react';

function MobileList({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.title} />
          <h4>{item.title}</h4>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}


export default MobileList;
