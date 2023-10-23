import React, { useState } from 'react';
import './App.css';

const IMAGES = {
  'my badges': [
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=Badge1',
    'https://via.placeholder.com/150/00FF00/FFFFFF?text=Badge2',
    'https://via.placeholder.com/150/0000FF/FFFFFF?text=Badge3'
  ],
  'my cert': [
    'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Cert1',
    'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Cert2',
    'https://via.placeholder.com/150/00FFFF/FFFFFF?text=Cert3'
  ],
  'my data': [
    'https://via.placeholder.com/150/F0F0F0/000000?text=Data1',
    'https://via.placeholder.com/150/0F0F0F/FFFFFF?text=Data2',
    'https://via.placeholder.com/150/333333/FFFFFF?text=Data3'
  ]
}

function App() {
  const [selectedMenu, setSelectedMenu] = useState('my badges');
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setSelectedImage(null);
  }

  return (
    <div className="App">
      <div className="menu">
      {Object.keys(IMAGES).map(menu => (
          <button key={menu} onClick={() => handleMenuClick(menu)}>{menu}</button>
        ))}
      </div>
      
      {selectedImage ? (
        <div className="details">
          <img src={selectedImage} alt="Selected" />
          <h2>Title</h2>
          <p>Experience</p>
          <p>Date</p>
          <p>Name & Email Address</p>
          <button>Update</button>
          <button>Delete</button>
        </div>
      ) : (
        <div className="gallery">
          {IMAGES[selectedMenu].map(image => (
            <img key={image} src={image} alt={selectedMenu} onClick={() => setSelectedImage(image)} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
