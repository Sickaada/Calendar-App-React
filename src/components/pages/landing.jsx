import React from 'react';
import { Grid, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import Login from '../Login';
import bg from '../../bg.jpg';

function Landing({ setisLoggedIn }) {
  return (
    <div>

      <Grid container style={{ minHeight: '100vh', backgroundSize: 'cover', backgroundImage: `url(${bg})` }}>

        <Grid container item xs={12} sm={6} alignItems="center" direction="column" justify="space-between" style={{ padding: '10', height: '100vh' }}>

          <div style={{
            display: 'flex', flexDirection: 'column', maxWidth: '800', minWidth: '300', paddingTop: '25vh',
          }}
          >
            <Grid justify content="center">
              <h1 style={{ font: 'bold italic 52px red', textAlign: 'center' }}>
                Fake-Calendly
              </h1>
            </Grid>
            <div style={{ height: '25' }} />
            <Button color="primary" variant="contained">
              <Login setisLoggedIn={setisLoggedIn} />
            </Button>
            <div style={{ height: '20' }} />
            <Button>
              Let us schedule meetings
            </Button>
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
