import { useRef } from 'react';
import useScript from '../../Hooks/useScript';

// import { postGoogleLogin } from 'api/auth';

// const GoogleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const GoogleLogin = () => {
  const googleSignInButton = useRef(null);
  function handleResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
  }
  useScript('https://accounts.google.com/gsi/client', () => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleResponse,
    });

    window.google.accounts.id.renderButton(googleSignInButton.current, {
      theme: 'outline',
      size: 'large',
    });
  });

  return <div id="google-login-api" ref={googleSignInButton} />;
};

// export function GoogleLogout() {
//   const googleSignOutButton = useRef(null);

//   useScript('https://mail.google.com/mail/u/0/?logout&hl=en', () => {
//     window.google.accounts.id.initialize({
//       client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//     });
//     window.google.accounts.id.renderButton(googleSignOutButton.current, {
//       theme: 'outline',
//       size: 'large',
//     });
//   });

//   return <div id="google-logout-api" ref={googleSignOutButton} />;
// }
