import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch, useSelector } from "react-redux";
// import { selectSignedIn, setSignedIn, setUserData, } from "../features/userSlice"
import { selectSignedIn, setSignedIn, setUserData, } from "../features/userSlice"
import "../styling/home.css";


function Homepage() {
  const dispatch = useDispatch();
  const login = (response) => {
    console.log(response);
    dispatch(setSignedIn(true));
    dispatch(setUserData(response.profileObj));
  };

  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="home__page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn && ( 
      <div className="login__message">
      <h2>📕</h2>    
      <h1>A Readers favourite place!</h1>
      <p>We provider high quality online resource for reading blogs. up and start reading some quality blogs.</p>
      <GoogleLogin 
        clientId="429411525464-soid5mfoscdar0rh1qhb6vfgm57bodpo.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
           className="login__button">
          Login with Google
          </button>
        )}
        onSuccess={login}
        onFailure={login}
        isSignedIn={true}
        cookiePolicy={"single_host_origin"}
      />
    </div>
      )}
    </div>
  )
}

export default Homepage;


