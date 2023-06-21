import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

export default function ReviewBox({ reviewObj }) {
  return (
    <div className="d-flex flex-column mb-2">
      <div className="d-flex flex-row">
        <div><Image className="review-avatar" src={reviewObj?.user_photo} alt="" /></div>
        <div className="d-flex flex-column">
          <h6 className="review-name by-author">{reviewObj?.userName}</h6>
          {reviewObj?.review}
        </div>
      </div>

    </div>
  );
}

ReviewBox.propTypes = {
  reviewObj: PropTypes.shape.isRequired,
};
