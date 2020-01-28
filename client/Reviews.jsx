import React, { useState, useEffect } from 'react';
const moment = require('moment');

const Reviews = ({ reviews }) => {
  const list = reviews.map((review) => {
    return (
      <div>
        <div>
          {review.vip ? 'VIP' : ''}
          {' '}
          {review.firstName}
          {review.lastName.substring(0, 1)}
          {' '}
          {review.city}
          {' '}
          STARS
          {' '}
          Dined
          {' '}
          {moment(review.dineDate).fromNow()}
        </div>
        <div>
          Overall
          {' '}
          {review.overall}
          {' * '}
          Food
          {' '}
          {review.food}
          {' * '}
          Service
          {' '}
          {review.service}
          {' * '}
          Ambience
          {' '}
          {review.ambience}
        </div>
        <div>
          {review.comments}
        </div>
        <br></br>
      </div>
    );
  });
  return <div>{list}</div>;
};
export default Reviews;
