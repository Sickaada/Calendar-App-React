import React from 'react';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logout from '../Logout';

function Home({ setisLoggedIn }) {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home</h1>
      <div>
        <Button onClick={() => { navigate('/createEvent'); }}>Create event </Button>
      </div>
      <div>
        <Button onClick={() => { navigate('/showEvents'); }}>Show event </Button>
      </div>
      <Logout setisLoggedIn={setisLoggedIn} />
    </>
  );
}
Home.propTypes = {
  setisLoggedIn: PropTypes.func.isRequired,
};

export default Home;
