import React from 'react';

function ImageView({ data, setSelectedItem }) {
  return (
    <div>
      {data.map((item) => (
        <img
          key={item.id}
          src={item.imageUrl}
          alt={item.title}
          onClick={() => setSelectedItem(item)}
        />
      ))}
    </div>
  );
}


export default ImageView;
