/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  btn: {
    width: '100%',
  },
});
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientID = '65367275187-2rtntb1b7th5nm03c83a2hgio2dt0oom.apps.googleusercontent.com';

function Login({ setisLoggedIn }) {
  const classes = useStyles();
  const onSuccess = (response) => {
    // console.log('User is', response.profileObj);
    localStorage.setItem('user', JSON.stringify(response.profileObj));
    setisLoggedIn(true);
  };
  const onFailure = (response) => {
    console.log('Failed', response);
  };

  return (
    <div>

      <GoogleLogin
        clientId={clientID}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
        scope="openid email profile https://www.googleapis.com/auth/calendar"
        render={(props) => (
          <div style={{ width: '100%' }}>
            <Button color="primary" variant="contained" className={classes.btn} onClick={props.onClick} disabled={props.disabled}>Login</Button>
            {' '}
          </div>
        )}
        isSignedIn

      />

    </div>
  );
}
Login.propTypes = {
  setisLoggedIn: PropTypes.func.isRequired,
};
export default Login;
