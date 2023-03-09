import { Rating } from '@material-ui/lab';
import React from 'react';
import profile from "../../images/profile.png";

const ReviewCard = ({ review }) => {
    const options = {
      value: review.rating,
      readOnly: true,
      precision: 0.5,
      }
  return (
    <div className="reviewCard">
        <img src={profile} alt="User" />
        <p>{review.name}</p>
        <Rating {...options} />
        <span>{review.comment}</span>
    </div>
  );
}

export default ReviewCard