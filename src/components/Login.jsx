/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { REACT_APP_CLIENT_ID } from '../config';
import '../styles/common.css';

const clientID = REACT_APP_CLIENT_ID;

function Login({ setisLoggedIn }) {
  const onSuccess = (response) => {
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
                <button
                  type="button"
                  className="login-button"
                  onClick={props.onClick}
                  disabled={props.disabled}
                >
                    Login
                </button>
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
