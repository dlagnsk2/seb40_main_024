import { useRef, useContext } from 'react';
import useScript from '../../Hooks/useScript';
import AuthContext from '../../store/AuthContext';

// import { postGoogleLogin } from 'api/auth';

// const GoogleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const GoogleLogin = ({ openModal }) => {
  const authCtx = useContext(AuthContext);
  const googleSignInButton = useRef(null);

  // eslint-disable-next-line no-unused-vars
  const handleResponse = (response) => {
    const reqToken = response.credential;
    // localStorage.setItem('token', response.credential);
    authCtx.login(reqToken);

    openModal();
  };

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
