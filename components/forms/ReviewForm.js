import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createReview, getReviewsByGameId, updateReview } from '../../api/gamesData';
import ReviewBox from '../ReviewBox';

const initialState = {
  review: '',
};

export default function ReviewForm({ gameId, onUpdate }) {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    getReviewsByGameId(gameId).then(setReviews);
  }, [gameId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formInput, userName: user.displayName, user_photo: user.photoURL, game_id: gameId,
    };
    createReview(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      updateReview(patchPayload).then(() => {
        setFormInput(initialState);
      });
    });
    getReviewsByGameId(gameId).then(setReviews);
  };

  return (
    <>
      {user ? (
        <>
          <div className="d-flex flex-column" id="review-container" style={{ width: '1400px' }}>
            <Form onSubmit={handleSubmit} className="d-flex">
              <div className="d-flex" style={{ width: '1069px' }}>
                <Card.Img src={user.photoURL} style={{ width: '50px', borderRadius: '100px' }} className="me-3 d-flex flex-column" />
                <Form.Control
                  type="text"
                  placeholder="Add a review..."
                  name="review"
                  value={formInput.review}
                  onChange={handleChange}
                  className="d-flex"
                  required
                />
              </div>
              <div className="text-right m-2" style={{ textAlign: 'right' }}>
                <Button type="submit" onClick={onUpdate} style={{ borderRadius: '30px', height: '40px', fontWeight: '600' }}>Review</Button>
              </div>
            </Form>
          </div>
          <div className="list-reviews">
            {reviews?.map((review) => <ReviewBox reviewObj={review} gameId={review.game_id} />)}
          </div>
        </>
      ) : (
        <div className="list-reviews">
          {reviews?.map((review) => <ReviewBox reviewObj={review} gameId={review.game_id} />)}
        </div>
      )}
    </>
  );
}

ReviewForm.propTypes = {
  gameId: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
