// src/App.js
// src/App.js

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BADGES } from './queries';
import './styles.css';

function App() {
  const { loading, error, data } = useQuery(GET_BADGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <h1>Badges</h1>
      <div className="badges-list">
        {data.getBadges.map((badge) => (
          <div key={badge.id} className="badge-item">
            <img src={badge.img} alt={badge.title} />
            <h2>{badge.title}</h2>
            <p>{badge.details}</p>
            {badge.certificate && (
              <div>
                <h3>Certificate Information</h3>
                <p>Name: {badge.certificate.name}</p>
                <p>Email: {badge.certificate.email}</p>
                <p>Date: {badge.certificate.date}</p>
                <a href={badge.certificate.signedUrl} download>
                  Download Certificate
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
