/* eslint-disable react/prop-types */
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { REACT_APP_CLIENT_ID } from '../config';

const useStyles = makeStyles({
  btn: {
    width: '100%',
  },
});

const clientID = REACT_APP_CLIENT_ID;

function Logout({ setisLoggedIn }) {
  const classes = useStyles();
  const onSuccess = () => {
    localStorage.removeItem('user');
    setisLoggedIn(false);
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={(props) => (
          <div style={{ width: '20%' }}>
            <Button color="primary" variant="contained" className={classes.btn} onClick={props.onClick} disabled={props.disabled}>Logout</Button>
            {' '}
          </div>
        )}
      />
    </div>
  );
}
Logout.propTypes = {
  setisLoggedIn: PropTypes.func.isRequired,
};
export default Logout;
