import React from 'react';
import { GoogleLogout } from 'react-google-login';

const cliendId = "458394862987-jl6bu2a3ppc3jc42qbhi2p8fohh6p6j3.apps.googleusercontent.com"

function Logout() {
  const onSuccess = () => {
    alert('Logout made successfully');
  };

  return (
    <div>
      <GoogleLogout
        clientId={cliendId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      >
      </GoogleLogout>
    </div>
  )
}

export default Logout;