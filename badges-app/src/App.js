import React, { useState } from 'react';
import { Button, Grid, Paper, Container } from '@mui/material';
import { useQuery } from '@apollo/client';
import { GET_BADGES } from './queries';
import './App.css';

function App() {
  const { loading, error, data } = useQuery(GET_BADGES);
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
  
  const [selectedMenu, setSelectedMenu] = useState('my badges');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageInfo, setSelectedImageInfo] = useState(null);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setSelectedImage(null);
    setSelectedImageInfo(null); // Add this line to reset the info
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} justifyContent="center">
        {Object.keys(IMAGES).map(menu => (
          <Grid item key={menu}>
            <Button variant="contained" color="primary" onClick={() => handleMenuClick(menu)}>
              {menu}
            </Button>
          </Grid>
        ))}
      </Grid>
      {selectedImage ? (
        <Paper elevation={3} style={{ padding: '16px', marginTop: '20px' }}>
          <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />
          {selectedImageInfo && (
            <div>
              <h3>Additional Information</h3>
              <p>Title: {selectedImageInfo.title}</p>
              <p>Experience: {selectedImageInfo.experience}</p>
              <p>Date: {selectedImageInfo.date}</p>
              <p>Name: {selectedImageInfo.name}</p>
              <p>Email: {selectedImageInfo.email}</p>
              <button
                className="edit-button download-button"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = selectedImageInfo.certUrl;
                  link.download = 'certificate.pdf';
                  link.click();
                }}
              >
                Download Certificate
              </button>
            </div>
          )}
          <button className="edit-button update-button">Update</button>
          <button className="edit-button delete-button">Delete</button>
        </Paper>
      ) : (
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}> 
        {data.getBadges.map((badge) => (
          <Grid item key={badge.id} xs={12} sm={6} md={4}>
            <Paper elevation={3}>
              <img src={badge.imageUrl} alt={badge.title} style={{ width: '100%', cursor: 'pointer' }} onClick={() => 
                {
                  console.log(badge);
                  setSelectedImage(badge.imageUrl);
                  setSelectedImageInfo({
                    title: badge.title,
                    experience: badge.experience, // Add the relevant properties
                    date: badge.date,             // Add the relevant properties
                    name: badge.name, // Add the relevant properties
                    email: badge.email, // Add the relevant properties
                    certUrl: badge.certificate.s3Url // Add the relevant properties
                  });
                }} />
              {/* {badge.certificate && (
              <div>
                <h3>Certificate Information</h3>
                <p>Name: {badge.certificate.name}</p>
                <p>Email: {badge.certificate.email}</p>
                <p>Date: {badge.certificate.date}</p>
                <a href={badge.certificate.signedUrl} download>
                  Download Certificate
                </a>
              </div>
            )} */}
            </Paper>
          </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default App;
