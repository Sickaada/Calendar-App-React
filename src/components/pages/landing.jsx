import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import Login from '../Login';
import bg from '../../assets/bg.jpg';
import '../../styles/landing.css';

function Landing({ setisLoggedIn }) {
  return (

      <div>
          <Grid
            container
            style={{
          minHeight: '100vh',
          backgroundSize: 'cover',
          backgroundImage: `url(${bg})`,
        }}
          >
              <Grid
                container
                item
                xs={12}
                sm={6}
                alignItems="center"
                direction="column"
                justifyContent="space-between"
                style={{ padding: '10', height: '100vh' }}
              >
                  <div className="landing-container">
                      <h1 className="landing-title">Meeting Scheduler</h1>
                      <div className="landing-toast">Let us schedule meetings</div>
                      <Login setisLoggedIn={setisLoggedIn} />
                  </div>
              </Grid>
              <Grid item xs={12} sm={6} />
          </Grid>
      </div>
  );
}
Landing.propTypes = {
  setisLoggedIn: PropTypes.func.isRequired,
};

export default Landing;
