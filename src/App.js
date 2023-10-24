import React, { useState } from 'react';
import { Button, Grid, Paper, Container, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
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
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setSelectedImage(null);
  }

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" onClick={toggleSidebar}>Menu</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={openSidebar} onClose={toggleSidebar}>
        <List>
          {Object.keys(IMAGES).map(menu => (
            <ListItem button key={menu} onClick={() => handleMenuClick(menu)}>
              <ListItemText primary={menu} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container maxWidth="lg">
        {selectedImage ? (
          <Paper elevation={3} style={{ padding: '16px', marginTop: '20px' }}>
            <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />
            {/* ... rest of the details ... */}
          </Paper>
        ) : (
          <Grid container spacing={2} justifyContent="center" style={{ marginTop: '20px' }}>
            {IMAGES[selectedMenu].map(image => (
              <Grid item key={image} xs={12} sm={6} md={4}>
                <Paper elevation={3}>
                  <img src={image} alt={selectedMenu} style={{ width: '100%', cursor: 'pointer' }} onClick={() => setSelectedImage(image)} />
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default App;
