import React from 'react';

import GoogleLogin from 'react-google-login';

const cliendId = "458394862987-jl6bu2a3ppc3jc42qbhi2p8fohh6p6j3.apps.googleusercontent.com"

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
    }

    const onFailure = (res) => {
        console.log('[Login failed] res:', res);
    };

    return (
        
        <div>
            <GoogleLogin
            clientId={cliendId}
            buttonText="Login"
            onSuccess={onSuccess}
            isSignedIn={true}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '40px' }}
      />
      </div>
        
    );
}

export default Login;
    
    
