import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logout from '../Logout';
import bg from '../../bg.jpg';

function Home({ setisLoggedIn }) {
  const navigate = useNavigate();

  return (
    <div style={{ backgroundImage: `url(${bg})`, minHeight: '100vh', backgroundSize: 'cover' }}>
      <div style={{
        display: 'flex', flexDirection: 'column', width: '25%', marginLeft: '15%', transform: 'translateY(80%)',
      }}
      >
        <h1 style={{ font: 'bold italic 52px red', marginBottom: '2rem' }}>
          Fake-Calendly
        </h1>
        <Button style={{ backgroundColor: 'white', width: 'max-content', border: '1px solid grey' }} onClick={() => { navigate('/createEvent'); }}>Create event </Button>
        <Button
          style={{
            backgroundColor: 'white', width: 'max-content', border: '1px solid grey', margin: '1rem 0',
          }}
          onClick={() => { navigate('/showEvents'); }}
        >
          Show event
        </Button>
        <Logout setisLoggedIn={setisLoggedIn} />
      </div>
    </div>
  );
}
Home.propTypes = {
  setisLoggedIn: PropTypes.func.isRequired,
};

export default Home;
