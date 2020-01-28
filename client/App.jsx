import React, { useState, useEffect } from 'react';
// import React from 'react';
import axios from 'axios';
import Reviews from './Reviews.jsx';

const App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    axios.get(`/${id}`)
      .then((result) => {
        console.log('data from DB ', result.data);
        setReviews(result.data);
        console.log('data in state ', reviews);
      })
      .catch((err) => console.log('error ', err));
  }, []);

  return (
    <Reviews reviews={reviews} />
  );
};

// const App = () => <div>testing React!</div>;
export default App;
