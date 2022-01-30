/* eslint-disable react/prop-types */
import React from 'react';
import { GoogleLogout } from 'react-google-login';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  btn: {
    width: '100%',
  },
});

const clientID = '679042011354-2f2upoivo3q9ko9mlv3op4is64ikcjvv.apps.googleusercontent.com';

function Logout({ setisLoggedIn }) {
  const classes = useStyles();
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
