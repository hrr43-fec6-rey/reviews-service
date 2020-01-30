import React, { useState, useEffect } from 'react';
// import React from 'react';
import axios from 'axios';
import Reviews from './Reviews.jsx';
import './App.css';

const App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    axios.get(`/${id}`)
      .then((result) => {
        setReviews(result.data);
      })
      .catch((err) => console.log('error ', err));
  }, []);

  return (
    <Reviews reviews={reviews} />
  );
};

export default App;
