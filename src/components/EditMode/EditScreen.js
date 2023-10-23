import React from 'react';

function EditScreen({ item }) {
  return (
    <div>
      <img src={item.imageUrl} alt={item.title} />
      <h4>{item.title}</h4>
      <p>{item.date}</p>
      {/* ... other editing fields ... */}
    </div>
  );
}

export default EditScreen;
