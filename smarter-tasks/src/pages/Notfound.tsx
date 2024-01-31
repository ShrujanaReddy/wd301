// NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Notfound: React.FC = () => {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/home">
        <button id="backToHomeButton">Back to Homepage</button>
      </Link>
    </div>
  );
};

export default Notfound;