/* eslint-disable react/prop-types */
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types';
import { REACT_APP_CLIENT_ID } from '../config';
import '../styles/common.css';

const clientID = REACT_APP_CLIENT_ID;

function Logout({ setisLoggedIn }) {
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
                <button
                  type="button"
                  className="logout-button"
                  onClick={props.onClick}
                  disabled={props.disabled}
                >
                    Logout
                </button>
        )}
          />
      </div>
  );
}
Logout.propTypes = {
  setisLoggedIn: PropTypes.func.isRequired,
};
export default Logout;
