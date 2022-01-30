import React from 'react';
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types';

const clientID = '679042011354-2f2upoivo3q9ko9mlv3op4is64ikcjvv.apps.googleusercontent.com';

function Logout({ setisLoggedIn }) {
  const onSuccess = () => {
    console.log('Logged out!');
    localStorage.removeItem('user');
    setisLoggedIn(false);
  };
  return (
    <div>
      <GoogleLogout
        clientId={clientID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
Logout.propTypes = {
  setisLoggedIn: PropTypes.func.isRequired,
};
export default Logout;
