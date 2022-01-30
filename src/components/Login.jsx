import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';

// import { refreshTokenSetup } from '../utils/refreshToken';

const clientID = '65367275187-2rtntb1b7th5nm03c83a2hgio2dt0oom.apps.googleusercontent.com';

function Login({ setisLoggedIn }) {
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
        style={{ marginTop: '100px', backgroundColor: '#3f51b5' }}
        isSignedIn
      />

    </div>
  );
}
Login.propTypes = {
  setisLoggedIn: PropTypes.func.isRequired,
};
export default Login;
