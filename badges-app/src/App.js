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

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setSelectedImage(null);
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
          {/* ... rest of the details ... */}
        </Paper>
      ) : (
        <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}> 
        {data.getBadges.map((badge) => (
          <Grid item key={badge.id} xs={12} sm={6} md={4}>
            <Paper elevation={3}>
              <img src={badge.imageUrl} alt={badge.title} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setSelectedImage(badge.imageUrl)} />
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
