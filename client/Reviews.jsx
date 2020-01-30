import React, { useState, useEffect } from 'react';
import msgIcon from './message-icon.png';

const moment = require('moment');

const Reviews = ({ reviews }) => {
  const list = reviews.map((review) => {
    return (
      <div key={review._id} className="review">
        <div className="review-user">
          <div className="user-box">
            <div className="user-circle">
              <div className="user-initials">
                {review.firstName[0]}{review.lastName[0]}
              </div>
            </div>
          </div>
          <div className="user-name">
            {review.firstName}
            {review.lastName.substring(0, 1)}
            {review.vip ? <span className="user-vip">VIP</span> : ''}
          </div>
          <div className="user-city">
            {review.city}
          </div>
          <div className="user-num-reviews">
            <img className="msg-icon" src={msgIcon}></img>
            {review.numReviews}
            {' '}
            reviews
          </div>
        </div>
        <div className="review-details">
          <div className="review-header">
            <div className="review-pre-ratings">
              <div className="review-stars">
                <span style={{ color: (review.overall >= 1) ? 'rgb(218, 55, 67)' : '#d8d9db' }}>★</span>
                <span style={{ color: (review.overall >= 2) ? 'rgb(218, 55, 67)' : '#d8d9db' }}>★</span>
                <span style={{ color: (review.overall >= 3) ? 'rgb(218, 55, 67)' : '#d8d9db' }}>★</span>
                <span style={{ color: (review.overall >= 4) ? 'rgb(218, 55, 67)' : '#d8d9db' }}>★</span>
                <span style={{ color: (review.overall >= 5) ? 'rgb(218, 55, 67)' : '#d8d9db' }}>★</span>
              </div>
              {' '}
              <span className="review-date">
                • Dined {moment(review.dineDate).fromNow()}
              </span>
            </div>
              <div className="review-ratings">
                Overall
                {' '}
                <span className="review-numbers">{review.overall}
                </span>
                {' '}
                • Food
                {' '}
                <span className="review-numbers">{review.food}</span>
                {' '}
                • Service
                {' '}
                <span className="review-numbers">{review.service}</span>
                {' '}
                • Ambience
                {' '}
                <span className="review-numbers">{review.ambience}</span>

              </div>
          </div>
          <div className="review-comments">
            {review.comments}
          </div>
          <br></br>
        </div>

      </div>

    );
  });
  return <div>{list}</div>;
};
export default Reviews;
