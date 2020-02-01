import React, { useState, useEffect } from 'react';
// import React from 'react';
import axios from 'axios';
import Toolbar from './Toolbar.jsx';
import Reviews from './Reviews.jsx';
import './App.css';

const App = () => {
  const [reviews, setReviews] = useState([]);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  useEffect(() => {
    axios.get(`/${id}`)
      .then((result) => {
        setReviews(result.data);
      })
      .catch((err) => console.log('error ', err));
  }, []);

  // const sortReviews = (sort) => {
  //   if (sort === 'Newest') {
  //     axios.get(`/${id}`)
  //       .then((result) => {
  //         setReviews(result.data);
  //       })
  //       .catch((err) => console.log('error ', err));
  //   } else {
  //     axios.get(`/sort/${id}/${sort}`)
  //       .then((result) => {
  //         setReviews(result.data);
  //       })
  //       .catch((err) => console.log('error ', err));
  //   }
  // };

  // const filterReviews = (sort, list) => {
  //   console.log('FILTER LIST ', list);
  //   if (!list.length) {
  //     sortReviews('Newest');
  //   } else {
  //     axios.get(`/filter/${id}/${JSON.stringify(list)}`)
  //       .then((result) => {
  //         setReviews(result.data);
  //       })
  //       .catch((err) => console.log('error ', err));
  //   }
  // };

  const sortReviews = (sort, list) => {
    if ((!sort || sort === 'Newest') && !list.length) {
      axios.get(`/${id}`)
        .then((result) => {
          setReviews(result.data);
        })
        .catch((err) => console.log('error ', err));
    } else {
      if (!sort) { sort = 0; }
      axios.get(`/sort/${id}/${sort}/${JSON.stringify(list)}`)
        .then((result) => {
          setReviews(result.data);
        })
        .catch((err) => console.log('error ', err));
    }
  };
  return (
    <div>
      {/* <Toolbar sortReviews={sortReviews} filterReviews={filterReviews} /> */}
      <Toolbar sortReviews={sortReviews} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default App;
