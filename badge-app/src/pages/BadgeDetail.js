import React, { useState } from 'react';

function BadgeDetail() {
  // Hardcoded badgeDetail object for demonstration
  const badgeDetail = {
    imageUrl: 'https://via.placeholder.com/200',  // Placeholder image URL
    name: 'Sample Badge',
    description: 'This is a description of the sample badge.',
    date: '2023-10-23',
    userName: 'John Doe',  // Hardcoded user name for demonstration
    userEmail: 'johndoe@example.com'  // Hardcoded user email for demonstration
  };

  const [userName, setUserName] = useState(badgeDetail.userName);
  const [userEmail, setUserEmail] = useState(badgeDetail.userEmail);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>

      {/* Badge Image and Badge Attributes */}
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '20px' }}>
        <img
          src={badgeDetail.imageUrl}
          alt="Badge"
          style={{ width: '200px', marginRight: '20px' }}
        />

        {/* Badge Details on the Right */}
        <div>
          <h2>{badgeDetail.name}</h2>
          <p>{badgeDetail.description}</p>
          <p>{badgeDetail.date}</p>
        </div>
      </div>

      {/* User Details Input Fields */}
      <div style={{ border: '1px solid black', padding: '10px', width: '400px', marginBottom: '10px' }}>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={{ width: '100%', marginBottom: '5px' }}
        />
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          style={{ width: '100%' }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '400px' }}>
        <button>Update</button>
        <button>Download</button>
      </div>
    </div>
  );
}

export default BadgeDetail;
