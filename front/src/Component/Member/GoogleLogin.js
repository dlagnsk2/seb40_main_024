import { useRef } from 'react';
import useScript from '../../Hooks/useScript';
// import { postGoogleLogin } from 'api/auth';
// const GoogleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
// console.log(`${GoogleClientId}`);

export default function GoogleLogin() {
  const googleSignInButton = useRef(null);

  useScript('https://accounts.google.com/gsi/client', () => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    });
    window.google.accounts.id.renderButton(googleSignInButton.current, {
      theme: 'outline',
      size: 'large',
    });
    // console.log(window.google.accounts.TokenClient);
    // console.log(window.google.accounts.oauth2);
  });

  return <div id="google-login-api" ref={googleSignInButton} />;
}
