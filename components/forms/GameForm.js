import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createGame, updateGame } from '../../api/gamesData';

const initialState = {
  description: '',
  numOfPlayers: '',
  genre: '',
  image: '',
  price: '',
  title: '',
};

function GameForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateGame(formInput)
        .then(() => router.push(`/game/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createGame(payload).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Game</h2>

      {/* TITLE INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Game Title" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter a title"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* IMAGE INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Game Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* PRICE INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Game Price" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter price"
          name="price"
          value={formInput.price}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* GENRE SELECT  */}
      <FloatingLabel controlId="floatingInput3" label="Genre" className="mb-3">
        <Form.Select
          type="text"
          placeholder="Select the genre"
          name="genre"
          value={formInput.genre}
          onChange={handleChange}
          required
        >
          <option value="">Select a Genre</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
        </Form.Select>
      </FloatingLabel>

      {/* DESCRIPTION TEXTAREA  */}
      <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Description"
          style={{ height: '100px' }}
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* NUMBER OF PLAYERS TEXTAREA  */}
      <FloatingLabel controlId="floatingTextarea" label="Number Of Players" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Number Of Players"
          style={{ height: '100px' }}
          name="numOfPlayers"
          value={formInput.numOfPlayers}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Game</Button>
    </Form>
  );
}

GameForm.propTypes = {
  obj: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    numOfPlayers: PropTypes.string,
    title: PropTypes.string,
    genre: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

GameForm.defaultProps = {
  obj: initialState,
};

export default GameForm;
