import React from 'react';
import { Link } from 'react-router-dom';

function Badge({ imgSrc, id }) {
  return (
    <Link to={`/badge/${id}`} className="badge">
      {imgSrc && <img src={imgSrc} alt="Badge Image" />}
    </Link>
  );
}

export default Badge;
