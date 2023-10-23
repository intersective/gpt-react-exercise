import React, { useState } from 'react';
import './App.css';
import MenuBar from './components/DesktopView/MenuBar';
import ImageView from './components/DesktopView/ImageView';
import MobileList from './components/MobileView/MobileList';
import EditScreen from './components/EditMode/EditScreen';

function App() {
  // Sample data
  const [data, setData] = useState([
    {
      id: 1,
      src: "path/to/image1.jpg",
      title: "Sample Title 1",
      date: "2021-10-01",
      experience: "3 years",
      email: "sample1@example.com",
      menu: "menu1"
    },
    {
      id: 2,
      src: "path/to/image2.jpg",
      title: "Sample Title 2",
      date: "2021-09-15",
      experience: "2 years",
      email: "sample2@example.com",
      menu: "menu1"
    },
    {
      id: 3,
      src: "path/to/image3.jpg",
      title: "Sample Title 3",
      date: "2021-08-10",
      experience: "5 years",
      email: "sample3@example.com",
      menu: "menu2"
    },
    {
      id: 4,
      src: "path/to/image4.jpg",
      title: "Sample Title 4",
      date: "2021-07-05",
      experience: "1 year",
      email: "sample4@example.com",
      menu: "menu2"
    },
    {
      id: 5,
      src: "path/to/image5.jpg",
      title: "Sample Title 5",
      date: "2021-06-20",
      experience: "4 years",
      email: "sample5@example.com",
      menu: "menu3"
    },
    {
      id: 6,
      src: "path/to/image6.jpg",
      title: "Sample Title 6",
      date: "2021-05-25",
      experience: "2.5 years",
      email: "sample6@example.com",
      menu: "menu3"
    }
  ]);

  // Handlers for each functionality (filtering images, handling clicks, etc.)

  const [selectedMenu, setSelectedMenu] = useState('menu1'); // default selected menu
  const [selectedItem, setSelectedItem] = useState(null);

  // Filtered data based on the selected menu
  const filteredData = data.filter(item => item.menu === selectedMenu);
  const handleMenuChange = (selectedMenu) => {
    setSelectedMenu(selectedMenu);
  };

  return (
    <div className="App">
      {/* Check screen width to conditionally render components. This is a basic example; you should use CSS or a library like `react-responsive` for better handling. */}
      {window.innerWidth > 768 ? (
        <>
          <MenuBar onMenuChange={handleMenuChange} />
          <ImageView data={filteredData} setSelectedItem={setSelectedItem} />
        </>
      ) : (
        <MobileList data={data} />
      )}

      {/* Render EditScreen if an image is selected. */}
      {selectedItem && <EditScreen item={selectedItem} />}
    </div>
  );
}

export default App;
